# Prompt · Perfil de voz con NotebookLM (opcional)

> **Alternativa para casos específicos.** El método principal es `perfil-voz.md` corriendo local con Claude Code sobre `material-fuente/`. Usa este NotebookLM solo si:
>
> - Corpus muy grande (>500 páginas) que excede la ventana de contexto
> - Necesitas citas con link a la fuente original para verificación

Se ejecuta en [notebooklm.google.com](https://notebooklm.google.com) después de subir TODO el material de marca (PDFs, transcripciones, VSLs, posts, emails).

Pegar tal cual en el chat del notebook. El output va a la sección "Mi voz" de `CLAUDE.md` (copy-paste manual).

```text
Actúa como analista de brand voice.

Tu tarea: analizar TODO el material que subí en este notebook (PDFs,
transcripciones, VSLs, posts, emails) y construir un "perfil de voz"
detallado de cómo hablo y escribo.

Entrega 7 secciones:

## 1. Tono dominante
- Formal · informal · provocador · cálido · técnico · coloquial
- Si mezclo, describe la mezcla

## 2. 15 frases que repito con frecuencia
- Literal, tal como las digo
- Incluir muletillas si hay

## 3. 10 palabras que uso mucho
- Palabras repetidas a través del material
- Si son regionalismos (ej. "parce", "güey", "tío"), marcarlas

## 4. 10 palabras que NUNCA uso
- Detectables por su ausencia esperable
- Ej. si nunca digo "obviamente", "literalmente", "súper"

## 5. Estructura típica de mis frases
- Cortas · largas · mezcla
- ¿Empiezo párrafos con preguntas · datos · historias?
- ¿Cómo cierro ideas? (frase corta, cita, pregunta retórica, etc.)

## 6. Analogías y metáforas recurrentes
- Con qué cosas comparo conceptos

## 7. Temas que toco constantemente
- Los 3–5 temas que más aparecen en todo el material
- En qué tono hablo de cada uno

Criterios de ejecución:
- No inventes. Si no hay evidencia clara en el material, dilo
- Cita 2–3 ejemplos literales del material por cada observación
- Si detectas contradicciones entre materiales (ej. un VSL formal y posts informales), márcalas
- Formato de entrega · markdown con los headers ## exactos de arriba
```

## Cuándo re-correr este prompt

- Cuando subas material nuevo al notebook (nuevos posts, una entrevista larga, un webinar)
- Si el copy generado con CLAUDE.md empieza a sonar genérico, es señal de que el perfil de voz quedó corto
- Cada 2–3 meses como refresh
