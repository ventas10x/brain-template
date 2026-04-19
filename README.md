# brain-{cliente}

El segundo cerebro del cliente. Todo lo que produce en la asesoría vive aquí.

## Estructura

### Contexto base (raíz)

- **CLAUDE.md** — voz, oferta, avatares, tabúes. Claude lo lee automáticamente
- **mentalidad.md** — los 10 principios. Releer cuando te trabes
- **stack.md** — herramientas activas, costos, logins
- **next-session.md** — qué toca la próxima sesión de asesoría

### Voz y marca

- **avatares/** — avatar principal + secundario, detallados
- **oferta/** — oferta, objeciones, garantía, pricing
- **material-fuente/** — transcripciones, PDFs y posts en markdown · insumo para extraer perfil de voz

### Producción por módulo

- **vsl/** — estructura, hooks, scripts versionados
- **landing/** — copy activo, iteraciones, métricas
- **emails/** — secuencias, broadcasts, asuntos que funcionan
- **contenido/** — batch actual, pilares, hooks de post, calendario

### Soportes

- **prompts/** — prompts afinados para copy en tu voz · 4 listos + onboarding + perfil de voz
- **skills/** — skills custom invocables con `/nombre`
- **scripts/** — automatizaciones (ej. `fetch-videos.mjs` para descargar transcripts de YouTube)
- **referencias/** — swipes, competencia, inspiración
- **assets/** — outputs generados (videos, imágenes, PDFs)
- **sesiones/** — bitácora de cada sesión, organizadas por mes

## Cómo se usa

- Cada sesión · commit al final. Sin commit, no está cerrada
- Cuando te bloquees · abrí `mentalidad.md` y releé principio #2
- Cuando generes copy · dale a Claude todo el contexto de `CLAUDE.md` + el avatar + swipes
- Cuando una herramienta lleve 2 semanas sin usarse · cancelar

## Cómo arrancar

Dos opciones · ambas dejan tu Brain con historia git propia.

### Opción A · clonar y desprender (CLI)

```bash
git clone https://github.com/ventas10x/brain-template.git mi-brain
cd mi-brain
rm -rf .git
git init
git add .
git commit -m "primer commit — sesión 0"
```

### Opción B · "Use this template" (GitHub web)

En [github.com/ventas10x/brain-template](https://github.com/ventas10x/brain-template) · botón verde **Use this template** → crea tu propio repo con historia limpia → lo clonas con `git clone`.

## Comandos día a día

```bash
# Cada sesión
git add .
git commit -m "sesion-N: {qué pasó}"

# Backup en cloud (primera vez, si usaste Opción A)
gh repo create mi-brain --private --source=. --remote=origin --push
```

## Flujo de llenado

La mayoría de templates tiene `{placeholders}` tipo `{llenar}`. Se llenan progresivamente a lo largo del mes 1 · no hay que completar todo de golpe.

- **Sesión 0** · CLAUDE.md (oferta + avatar + voz básica) + stack.md
- **Sesiones 1–2** · profundizar avatares/, oferta/, primera versión de VSL o landing
- **Sesiones 3–4** · emails/, contenido/, iteraciones en base a datos reales
