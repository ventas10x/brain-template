# Videos de YouTube

Pega aquí los links de YouTube que quieras usar como material fuente. El script `scripts/fetch-videos.mjs` los lee, descarga los subtítulos en español (manuales si hay, auto-captions si no), los limpia y guarda como `material-fuente/transcripts/video-{id}.md`.

## Formato

Una línea por video. Descriptivo es mejor que no-descriptivo — pero lo único que el script mira son los URLs.

```
- [Webinar abundancia 2024](https://youtu.be/abc123xyz)
- [Podcast con Joe · ep15](https://www.youtube.com/watch?v=def456uvw)
- [Masterclass escalamiento](https://youtu.be/ghi789rst)
```

## Requisito · instalar yt-dlp una vez

```bash
# Mac
brew install yt-dlp

# Windows (con winget)
winget install yt-dlp.yt-dlp

# o descargar binario · https://github.com/yt-dlp/yt-dlp/releases
```

## Cómo correr

```bash
node scripts/fetch-videos.mjs
```

El script hace skip de videos ya transcritos · si agregas uno nuevo a la lista y re-corres, solo procesa el nuevo.

## Tus videos

<!-- Pega tus links abajo · borra los ejemplos -->

- [Ejemplo · reemplazar](https://youtu.be/EJEMPLO1)
- [Ejemplo · reemplazar](https://youtu.be/EJEMPLO2)
