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

### Producción por módulo

- **vsl/** — estructura, hooks, scripts versionados
- **landing/** — copy activo, iteraciones, métricas
- **emails/** — secuencias, broadcasts, asuntos que funcionan
- **contenido/** — batch actual, pilares, hooks de post, calendario

### Soportes

- **prompts/** — prompts afinados para copy en tu voz · 4 listos + el de onboarding
- **skills/** — skills custom invocables con `/nombre`
- **referencias/** — swipes, competencia, inspiración
- **assets/** — outputs generados (videos, imágenes, PDFs)
- **sesiones/** — bitácora de cada sesión, organizadas por mes

## Cómo se usa

- Cada sesión · commit al final. Sin commit, no está cerrada
- Cuando te bloquees · abrí `mentalidad.md` y releé principio #2
- Cuando generes copy · dale a Claude todo el contexto de `CLAUDE.md` + el avatar + swipes
- Cuando una herramienta lleve 2 semanas sin usarse · cancelar

## Comandos útiles

```bash
# Primera vez
git init
git add .
git commit -m "primer commit — sesión 0"

# Cada sesión
git add .
git commit -m "sesion-N: {qué pasó}"

# Subir a GitHub (tras crear el repo en github.com/tu-user/brain-tunombre)
git remote add origin git@github.com:tu-user/brain-tunombre.git
git push -u origin main
```

## Flujo de llenado

La mayoría de templates tiene `{placeholders}` tipo `{llenar}`. Se llenan progresivamente a lo largo del mes 1 · no hay que completar todo de golpe.

- **Sesión 0** · CLAUDE.md (oferta + avatar + voz básica) + stack.md
- **Sesiones 1–2** · profundizar avatares/, oferta/, primera versión de VSL o landing
- **Sesiones 3–4** · emails/, contenido/, iteraciones en base a datos reales
