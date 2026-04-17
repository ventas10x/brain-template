# Skills del Brain

Skills son prompts "quemados" que invocas con `/nombre` en Claude Code. Ejemplo · `/escribir-email` corre el prompt sin pegarlo.

## Cómo crear una skill

1. Crear archivo `skills/{nombre}.md`
2. Frontmatter con `name` y `description`
3. El cuerpo es el prompt + reglas

## Ejemplo mínimo

```markdown
---
name: escribir-email
description: Genera un email en mi voz con 3 asuntos y un body de 150 palabras
---

Escribe un email de {tipo} para mi lista.

Contexto: CLAUDE.md + avatares/avatar-principal.md + emails/asuntos.md

Reglas:
- Voz en primera persona
- 120–250 palabras
- 3 asuntos + body + P.S. opcional
```

## Dónde vive la config

- **Claude Code** lee skills desde esta carpeta cuando el Brain está como workspace activo
- Si quieres que las skills estén disponibles globalmente, copia al path global de Claude Code

## Skills sugeridas para primer mes

- `hook-generator` · basado en `prompts/generar-hook.md`
- `email-writer` · basado en `prompts/escribir-email.md`
- `headline-refiner` · basado en `prompts/refinar-headline.md`
- `vsl-repurpose` · basado en `prompts/repurpose-vsl-a-posts.md`

Empezar convirtiendo los prompts en skills una vez que ya los uses 2–3 veces manualmente y confirmes que están bien calibrados.
