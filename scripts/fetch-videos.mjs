#!/usr/bin/env node
// Lee material-fuente/videos.md, extrae URLs de YouTube, descarga subs en español
// (manual si hay, auto si no), los limpia y guarda como material-fuente/transcripts/video-{id}.md
//
// Requisito · yt-dlp instalado (brew install yt-dlp  |  winget install yt-dlp.yt-dlp)
//
// Uso · node scripts/fetch-videos.mjs

import { execSync } from 'node:child_process'
import { readFileSync, writeFileSync, readdirSync, mkdirSync, existsSync, unlinkSync } from 'node:fs'
import { resolve, dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const root = resolve(__dirname, '..')
const videosPath = join(root, 'material-fuente', 'videos.md')
const outDir = join(root, 'material-fuente', 'transcripts')

// Verificar yt-dlp
try {
  execSync('yt-dlp --version', { stdio: 'pipe' })
} catch {
  console.error('✗ yt-dlp no está instalado.')
  console.error('  Mac · brew install yt-dlp')
  console.error('  Windows · winget install yt-dlp.yt-dlp')
  process.exit(1)
}

if (!existsSync(videosPath)) {
  console.error(`✗ No existe ${videosPath}`)
  process.exit(1)
}

if (!existsSync(outDir)) mkdirSync(outDir, { recursive: true })

// Extraer URLs de YouTube del markdown
const md = readFileSync(videosPath, 'utf-8')
const urlRe = /https?:\/\/(?:www\.)?(?:youtube\.com\/watch\?v=|youtu\.be\/)([a-zA-Z0-9_-]{11})/g
const matches = [...md.matchAll(urlRe)]

// Dedupe por id
const seen = new Set()
const videos = matches
  .filter(m => !seen.has(m[1]) && seen.add(m[1]))
  .map(m => ({ url: m[0], id: m[1] }))

if (videos.length === 0) {
  console.log('No se encontraron URLs de YouTube en videos.md')
  process.exit(0)
}

console.log(`Encontrados ${videos.length} videos únicos.\n`)

let processed = 0
let skipped = 0
let failed = 0

for (const { url, id } of videos) {
  const outPath = join(outDir, `video-${id}.md`)
  if (existsSync(outPath)) {
    console.log(`· skip · ${id} · ya transcrito`)
    skipped++
    continue
  }

  try {
    // Título
    const title = execSync(`yt-dlp --get-title --skip-download "${url}"`, { encoding: 'utf-8', stdio: ['pipe', 'pipe', 'pipe'] }).trim()

    // Bajar subs en español (manual preferido, auto como fallback)
    execSync(
      `yt-dlp --write-subs --write-auto-subs --sub-lang "es,es-ES,es-419" --skip-download --sub-format vtt -o "${join(outDir, `video-${id}.%(ext)s`)}" "${url}"`,
      { stdio: 'pipe' }
    )

    // Encontrar el .vtt descargado (puede ser video-ID.es.vtt, video-ID.es-ES.vtt, etc.)
    const vttFile = readdirSync(outDir).find(f => f.startsWith(`video-${id}.`) && f.endsWith('.vtt'))
    if (!vttFile) {
      console.log(`✗ ${id} · sin subtítulos en español`)
      failed++
      continue
    }

    const vttPath = join(outDir, vttFile)
    const vtt = readFileSync(vttPath, 'utf-8')

    // Limpiar VTT a texto plano
    const text = vtt
      .split('\n')
      .map(l => l.trim())
      .filter(l => l && !l.startsWith('WEBVTT') && !l.startsWith('Kind:') && !l.startsWith('Language:') && !l.startsWith('NOTE'))
      .filter(l => !/^\d+$/.test(l))
      .filter(l => !/\d{2}:\d{2}[:.]\d{2,3}/.test(l))
      .filter(l => !l.includes('-->'))
      .map(l => l.replace(/<[^>]+>/g, '')) // remove <c> tags
      .join(' ')
      .replace(/\s+/g, ' ')
      .trim()

    // Dedupe de líneas repetidas consecutivas (YouTube auto-captions las generan)
    const words = text.split(' ')
    const dedup = []
    for (let i = 0; i < words.length; i++) {
      if (i > 0 && words[i] === words[i - 1]) continue
      dedup.push(words[i])
    }

    const content = `# ${title}

> Fuente · ${url}

${dedup.join(' ')}
`

    writeFileSync(outPath, content)
    unlinkSync(vttPath)
    console.log(`✓ ${id} · ${title}`)
    processed++
  } catch (err) {
    console.log(`✗ ${id} · error · ${err.message.split('\n')[0]}`)
    failed++
  }
}

console.log(`\nListo · ${processed} nuevos · ${skipped} skip · ${failed} fallaron`)
