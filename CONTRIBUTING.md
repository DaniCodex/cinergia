# Guía de contribución — CINERGIA Web

Esta guía es para cualquier miembro de CINERGIA que colabore en el código del sitio.

## Flujo de trabajo con Git

1. Crea una rama a partir de \`main\` con el prefijo según el tipo de cambio:
   - \`feature/nombre-corto\` — una funcionalidad nueva (ej. \`feature/pagina-proyectos\`)
   - \`fix/nombre-corto\` — corrección de un bug (ej. \`fix/ruta-imagen-sandra\`)
   - \`content/nombre-corto\` — solo cambios de contenido/texto/imágenes
2. Haz commits pequeños y descriptivos. Convención sugerida ([Conventional Commits](https://www.conventionalcommits.org)):
   \`\`\`
   feat: agrega filtro por área en /proyectos
   fix: corrige ruta de imagen de Sandra Flores
   content: actualiza cifras de la sección de métricas
   docs: actualiza README con instrucciones de despliegue
   \`\`\`
3. Antes de abrir un Pull Request, corre localmente:
   \`\`\`bash
   npm run typecheck
   npm run lint
   npm run build
   \`\`\`
   Un PR que no compila o no pasa lint no debería abrirse.
4. Describe en el PR qué cambia y, si es visual, adjunta una captura de pantalla
   (antes/después si es un cambio de diseño).

## Convenciones de código

- **Componentes**: un componente por archivo, nombrado igual que el archivo
  (\`Button.tsx\` exporta \`Button\`). Usa \`PascalCase\` para componentes,
  \`camelCase\` para funciones y variables.
- **"use client" solo cuando haga falta**: si un componente no usa \`useState\`,
  \`useEffect\`, eventos del navegador (\`onClick\`, etc.) u otros hooks de React,
  NO le agregues \`"use client"\`. Que se renderice en el servidor es mejor para
  performance (menos JavaScript enviado al navegador).
- **Nunca hardcodees contenido dentro de un componente visual.** Si es texto,
  fecha, imagen o dato que puede cambiar, va en \`src/lib/data/*.ts\` o
  \`src/lib/constants.ts\`, tipado con una interfaz de \`src/types/index.ts\`.
- **Colores**: usa siempre las utilidades de marca (\`bg-brand-blue\`,
  \`text-brand-dark\`, \`border-brand-orange\`, \`bg-brand-blue-light\`) definidas en
  \`src/app/globals.css\`. Nunca un hex code suelto (\`bg-[#0066cc]\`) — si necesitas
  un color nuevo, agrégalo como token en el \`@theme\` de \`globals.css\`, no lo
  escribas inline.
- **Componentes de UI reutilizables** (botones, tarjetas, badges) van en
  \`src/components/ui/\`. Antes de escribir un \`<button className="...">\` a mano,
  revisa si \`<Button>\` ya cubre el caso.
- **Accesibilidad no es opcional**: todo \`<img>\`/\`<Image>\` necesita \`alt\`
  (vacío \`alt=""\` si es puramente decorativa); todo \`<input>\` necesita un
  \`<label>\` asociado; los botones que solo tienen un ícono necesitan
  \`aria-label\`.

## Contenido con integridad

Este es un sitio institucional real. Si vas a agregar un testimonio, cifra o
dato que no puedas verificar en el momento, **no lo inventes**: usa un
placeholder explícito con un comentario \`TODO(tu-nombre)\` explicando qué falta
confirmar, siguiendo el mismo patrón que ya existe en \`lib/data/projects.ts\` y
\`lib/data/team.ts\`. Es preferible una sección vacía y honesta a un dato falso.

## Reportar bugs

Abre un issue en GitHub con: qué esperabas que pasara, qué pasó en realidad,
y pasos para reproducirlo (idealmente con captura de pantalla).
