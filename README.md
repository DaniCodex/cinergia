# CINERGIA — Sitio web

Sitio web oficial de **CINERGIA**, la asociación estudiantil de ingenierías de la
Universidad Científica del Sur (UCSUR). Construido con [Next.js](https://nextjs.org)
(App Router), [React](https://react.dev), [TypeScript](https://www.typescriptlang.org)
y [Tailwind CSS v4](https://tailwindcss.com).

## Stack técnico

| Herramienta | Versión | Uso |
|---|---|---|
| Next.js | 16.2.6 | Framework (App Router, Turbopack) |
| React | 19.2.4 | UI |
| TypeScript | 5.x | Tipado estático |
| Tailwind CSS | 4.x | Estilos (sistema `@theme` CSS-first) |
| Zod | 4.x | Validación de formularios (cliente + servidor) |
| @vercel/analytics | 1.x | Analítica ligera, sin cookies |

## Requisitos

- Node.js 20 o superior
- npm (el proyecto usa `package-lock.json`; si usas otro gestor, genera tu propio lockfile)

## Cómo correr el proyecto en local

\`\`\`bash
# 1. Instalar dependencias
npm install

# 2. Copiar las variables de entorno de ejemplo
cp .env.example .env.local
# Completa .env.local con tus propios valores (ver comentarios en el archivo).
# El sitio funciona sin ellas, pero el formulario de contacto no enviará
# correos reales hasta configurar RESEND_API_KEY y CONTACT_EMAIL_TO.

# 3. Levantar el servidor de desarrollo
npm run dev
\`\`\`

Abre [http://localhost:3000](http://localhost:3000).

## Scripts disponibles

\`\`\`bash
npm run dev         # Servidor de desarrollo (Turbopack)
npm run build       # Build de producción
npm run start       # Sirve el build de producción localmente
npm run lint        # ESLint
npm run typecheck   # Chequeo de tipos de TypeScript sin emitir archivos
\`\`\`

Antes de cada \`git push\`, corre \`npm run typecheck && npm run lint && npm run build\`
para asegurarte de que todo compila — el CI (si se configura) hará exactamente esto.

## Estructura de carpetas

\`\`\`
src/
├── app/                      # Rutas de Next.js (App Router)
│   ├── layout.tsx            # Layout raíz: fuentes, metadata SEO, Navbar/Footer
│   ├── page.tsx               # Home ("/")
│   ├── globals.css             # Design system: colores de marca, tipografía
│   ├── nosotros/                 # "/nosotros"
│   ├── eventos/                    # "/eventos"
│   ├── proyectos/                    # "/proyectos"
│   ├── impulsa/                        # "/impulsa" (Impulsa tu carrera)
│   ├── unete/                            # "/unete" (formulario de contacto)
│   ├── api/contact/route.ts               # Endpoint POST del formulario
│   ├── sitemap.ts                          # Genera /sitemap.xml
│   ├── robots.ts                            # Genera /robots.txt
│   ├── not-found.tsx                         # Página 404 personalizada
│   ├── error.tsx                              # Error boundary global
│   └── loading.tsx                             # Estado de carga global
│
├── components/
│   ├── ui/                   # Sistema de diseño: Button, Card, Badge, Icon...
│   ├── layout/                 # Navbar, MobileMenu, Footer
│   └── sections/                 # Secciones de cada página, agrupadas por página
│       ├── home/
│       ├── nosotros/
│       ├── eventos/
│       ├── proyectos/
│       └── shared/                  # Componentes reusados entre varias páginas
│
├── lib/
│   ├── constants.ts           # Datos globales del sitio (nav, redes, SITE info)
│   ├── utils.ts                 # Funciones utilitarias (cn, formateo de fechas)
│   ├── fonts.ts                   # Configuración de next/font
│   ├── data/                        # "Contenido" del sitio (noticias, testimonios...)
│   └── validations/                   # Esquemas de Zod
│
├── hooks/                     # Hooks reutilizables (useScrolled, useInView...)
└── types/                      # Tipos de TypeScript compartidos
\`\`\`

## Contenido y datos

Todo el contenido textual y las imágenes viven en \`src/lib/data/*.ts\`, **no**
hardcodeados dentro de los componentes. Para actualizar una noticia, testimonio,
proyecto o valor institucional, edita el archivo correspondiente en esa carpeta
— no hace falta tocar ningún componente visual.

⚠️ **Contenido pendiente antes de publicar** — ver los comentarios \`TODO(Joaquín)\`
dentro de cada archivo para el detalle completo:

- \`lib/data/projects.ts\` — son 3 tarjetas de **ejemplo** (\`isPlaceholder: true\`).
  No había ninguna data real de proyectos en el sitio original; reemplázalas
  antes de publicar.
- \`lib/data/testimonials.ts\` — la cita de Zurita es un placeholder explícito
  (el sitio original tenía el texto literal "Cita de Zurita" sin contenido real).
- \`lib/data/team.ts\` — muestra solo cargos de la directiva, no nombres/fotos de
  personas, porque no había ninguna fuente confirmada de quién ocupa cada rol.
- \`lib/constants.ts\` — usuarios de Instagram/LinkedIn y correo de contacto son
  placeholders razonables, confírmalos.

## Variables de entorno

Ver \`.env.example\` para la lista completa con comentarios. Ninguna es
estrictamente necesaria para que el sitio compile y funcione — solo para que
el formulario de contacto envíe correos reales.

## Despliegue

El proyecto está listo para desplegar en [Vercel](https://vercel.com) (creadores
de Next.js) sin configuración adicional:

1. Conecta el repositorio de GitHub a un nuevo proyecto de Vercel.
2. Configura las variables de entorno de \`.env.example\` en el dashboard de Vercel.
3. Cada push a \`main\` despliega automáticamente.

## Accesibilidad y SEO

- Metadata (Open Graph, Twitter Card, JSON-LD) configurada en \`app/layout.tsx\`.
- \`sitemap.xml\` y \`robots.txt\` se generan automáticamente desde las rutas reales.
- Navegación por teclado y lectores de pantalla probada en Navbar, menú móvil y
  formulario de contacto (labels asociados, \`aria-*\`, foco visible).
- Las animaciones respetan \`prefers-reduced-motion\`.

## Contribuir

Ver [\`CONTRIBUTING.md\`](./CONTRIBUTING.md).
