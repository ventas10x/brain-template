# Prompt · Perfil de voz (local con Claude Code)

Corre con Claude Code dentro del Brain, después de poblar `material-fuente/` con transcripciones, PDFs convertidos, posts y emails.

Claude lee toda la carpeta con su ventana de 1M y escribe directo en `CLAUDE.md` sección "Mi voz".

```text
Actúa como analista de brand voice.

Lee TODOS los archivos en material-fuente/ (transcripciones de
webinars/podcasts/lives, PDFs convertidos a texto, posts exportados,
emails de campañas). Construye un perfil de voz detallado y sobreescribe
la sección "## Mi voz" del archivo CLAUDE.md con el resultado.

Estructura de la sección "Mi voz" debe quedar así:

## Mi voz

### Tono dominante
- Formal · informal · provocador · cálido · técnico · coloquial
- Si mezclo, describe la mezcla

### 15 frases que repito con frecuencia
- Literal, tal como las digo
- Incluir muletillas si hay

### 10 palabras que uso mucho
- Palabras repetidas a través del material
- Si son regionalismos (ej. "parce", "güey", "tío"), marcarlas

### 10 palabras que NUNCA uso
- Detectables por su ausencia esperable
- Ej. si nunca digo "obviamente", "literalmente", "súper"

### Estructura típica de mis frases
- Cortas · largas · mezcla
- Cómo empiezo párrafos (preguntas · datos · historias)
- Cómo cierro ideas

### Analogías y metáforas recurrentes
- Con qué cosas comparo conceptos

### Temas que toco constantemente
- Los 3–5 temas que más aparecen
- En qué tono hablo de cada uno

Criterios de ejecución:
- No inventes. Si no hay evidencia clara en material-fuente/, dilo
- Cita 2–3 ejemplos literales del material por cada observación
- Si detectas contradicciones entre archivos (ej. webinar formal vs posts informales), flagéalas
- Después de escribir el archivo, muéstrame un resumen de lo que escribiste y qué archivos usaste como evidencia
```

## Cuándo re-correr

- Cada vez que agregues material nuevo a `material-fuente/`
- Si el copy generado empieza a sonar genérico
- Cada 2–3 meses como refresh
