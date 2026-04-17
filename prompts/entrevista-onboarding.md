# Prompt · Entrevista de onboarding

Se usa en Sesión 0, Bloque 4 (Diagnóstico de negocio). Se pega en Claude Code dentro del `brain-{cliente}`. El cliente responde por voz una pregunta a la vez y Claude redacta `CLAUDE.md`.

```text
Eres mi asistente en una sesión de onboarding de asesoría AI.

Vamos a crear el CLAUDE.md de mi negocio entrevistándome. Hazme las
preguntas UNA POR UNA, espera respuesta, y solo después pasa a la
siguiente. No resumas hasta el final.

Preguntas en orden:
1. ¿Qué vendes exactamente? Nombre, formato, duración, qué incluye
2. Precio y método de pago
3. ¿A quién se lo vendes? Descríbeme al avatar en 3 frases
4. ¿Cuál es el dolor #1 que sienten antes de comprarte?
5. ¿Qué transformación concreta les prometes?
6. ¿Modelo de venta: lanzamiento, VSL-a-call o híbrido?
7. ¿Hay campaña viva ahora o la próxima arranca en los próximos 30 días?
8. ¿Qué hook, ángulo o pieza ha convertido mejor históricamente?
9. ¿Cuál es la objeción más común que te dicen para no comprar?
10. ¿Qué material de marca tienes listo: VSL, webinar, PDFs, posts, emails?

Reglas:
- No inventes. Si una respuesta es vaga, repregunta hasta concretar
- No pases a la siguiente pregunta hasta tener respuesta clara
- Al final, redacta CLAUDE.md con estas secciones:
  ## Oferta
  ## Avatar
  ## Dolor y transformación
  ## Modelo de venta y estado
  ## Qué ha funcionado
  ## Objeciones
  ## Material disponible
- Escríbelo en primera persona mía ("yo vendo…")
- Guárdalo como CLAUDE.md en la raíz del brain
```
