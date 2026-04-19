# material-fuente

Todo tu material de marca en markdown. Insumo principal para extraer perfil de voz en Sesión A2 y para alimentar a Claude en sesiones futuras (VSL, landing, emails).

## Qué subir

Prioriza por valor · lo primero es lo más importante.

1. **Transcripciones de piezas largas** · webinars, podcasts, lives, YouTube, masterclasses
2. **Ebooks, guías y PDFs** · lo que hayas escrito publicado
3. **Emails de campañas que convirtieron** · los copys que vendieron
4. **Posts de RRSS con alto engagement** · no los recientes, los que funcionaron
5. **VSLs descargados y transcritos**
6. **Notas de podcasts ajenos donde fuiste invitado**

## Convención de nombres

- `01-webinar-2024-abundancia.md`
- `02-podcast-joe-ep15.md`
- `03-ebook-como-escalar.md`
- `04-emails-lanzamiento-q3-2024.md`
- `05-posts-ig-top-20.md`

Prefijo numérico para orden cronológico o de importancia. Nombre descriptivo sin tildes ni espacios.

## Cómo convertir cada tipo

### YouTube · solo pegar links

1. Pega los URLs en `videos.md`
2. Ejecuta `node scripts/fetch-videos.mjs`
3. El script descarga subs en español (manual si hay, auto como fallback), los limpia y guarda en `transcripts/video-{id}.md`

Requisito · yt-dlp instalado una vez (`brew install yt-dlp` o `winget install yt-dlp.yt-dlp`).

### PDFs a markdown

```bash
# pdftotext (viene con poppler-utils)
pdftotext mi-ebook.pdf mi-ebook.txt

# o Claude Code los lee nativo si son simples · meterlos directo como .pdf
```

### Audios sueltos (no YouTube)

```bash
# Whisper local (gratis, calidad alta)
pip install openai-whisper
whisper webinar.mp4 --model medium --language Spanish --output_format txt
```

### Posts de RRSS

- **Instagram** · copiar el texto a mano (IG no exporta limpio)
- **LinkedIn** · descargar export de datos desde settings
- **X / Twitter** · usar xdownloader o similar

### Emails

- Copiar del editor de tu ESP (ActiveCampaign, Klaviyo, Kit, etc.)
- Incluir el asunto arriba como H1 · `# Asunto del email`

## Qué NO subir

- Material que NO es tu voz (ebooks de otros, artículos compartidos)
- Notas de reuniones con terceros
- DMs privados con clientes (privacidad)
- Archivos muy largos sin aportar voz (ej. contratos legales)

## Flujo recomendado

1. Pegar URLs de YouTube en `videos.md` · correr `node scripts/fetch-videos.mjs`
2. Convertir PDFs/audios sueltos a markdown con las recetas de arriba
3. Copiar posts y emails a mano a archivos `.md`
4. `git add material-fuente && git commit -m "material: batch inicial"`
5. Ejecutar `prompts/perfil-voz.md` en Claude Code
