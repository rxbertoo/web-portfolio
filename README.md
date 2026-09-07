# web-portfolio

Portafolio web personal desarrollado con **React 19**, **TypeScript** y **Tailwind CSS v4**. Diseñado con un enfoque minimalista y técnico, priorizando el rendimiento, la tipografía limpia y una arquitectura desacoplada basada en datos.

---

## Características

- **Diseño minimalista & tema oscuro**: Paleta en azul cobalto (`#3b82f6`) sobre fondo oscuro neutro (`#0a0d14`), inspirada en interfaces técnicas y terminales modernas.
- **Arquitectura orientada a datos**: Toda la información personal, experiencia laboral, proyectos, educación y stack técnico está centralizada en `src/data/portfolioData.ts`, facilitando actualizaciones sin tocar la vista.
- **Tipado estricto**: Tipos e interfaces definidos en `src/types/portfolio.ts` para garantizar integridad y autocompletado en TypeScript.
- **Rendimiento y ligereza**: Construido con Vite 8 y Tailwind CSS v4 con bundling ultra rápido (< 700ms en build).
- **SEO & Social Cards**: Metaetiquetas completas de Open Graph y Twitter Cards configuradas en `index.html` con favicon personalizado en formato SVG.
- **Diseño completamente responsivo**: Adaptable a dispositivos móviles, tablets y pantallas de escritorio.

---

## Tecnologías

- **Framework**: [React 19](https://react.dev/)
- **Lenguaje**: [TypeScript 6](https://www.typescriptlang.org/)
- **Estilos**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Empaquetador**: [Vite 8](https://vite.dev/)
- **Iconografía**: [Lucide React](https://lucide.dev/) & SVGs vectoriales inline
- **Linter**: [ESLint 10](https://eslint.org/) con configuración estricta

---

## Estructura del Proyecto

```text
web-portfolio/
├── public/
│   ├── favicon.svg          # Favicon personalizado con monograma RB
│   └── profile.png          # Imagen para Open Graph / metadata
├── src/
│   ├── assets/              # Recursos gráficos e imágenes del sitio
│   ├── components/          # Componentes modulares de interfaz
│   │   ├── Contact.tsx      # Sección de contacto y footer con scroll-to-top
│   │   ├── Education.tsx    # Formación académica
│   │   ├── Experience.tsx   # Trayectoria laboral y logros
│   │   ├── Hero.tsx         # Encabezado principal, avatar y enlaces rápidos
│   │   ├── Projects.tsx     # Proyectos destacados y repositorios
│   │   ├── Skills.tsx       # Stack técnico organizado por categorías
│   │   └── TechIcons.tsx    # Iconos SVG de tecnologías
│   ├── data/
│   │   └── portfolioData.ts # Fuente de verdad con los datos del portafolio
│   ├── types/
│   │   └── portfolio.ts     # Interfaces y modelos de TypeScript
│   ├── App.tsx              # Ensamblado principal de secciones
│   ├── index.css            # Configuración de Tailwind y variables de tema
│   └── main.tsx             # Punto de entrada de la aplicación
├── index.html               # Plantilla HTML base con metadata SEO / OG
├── package.json
├── tsconfig.json
└── vite.config.ts
```

---

## Inicio Rápido

### Prerrequisitos

- [Node.js](https://nodejs.org/) (versión 18 o superior recomendada)
- [npm](https://www.npmjs.com/)

### Instalación

1. Clona el repositorio:
   ```bash
   git clone https://github.com/rxbertoo/web-portfolio.git
   cd web-portfolio
   ```

2. Instala las dependencias:
   ```bash
   npm install
   ```

3. Inicia el servidor de desarrollo:
   ```bash
   npm run dev
   ```

La aplicación estará disponible en `http://localhost:5173`.

---

## Scripts Disponibles

| Comando | Descripción |
| :--- | :--- |
| `npm run dev` | Inicia el servidor local de desarrollo con HMR. |
| `npm run build` | Valida tipos con `tsc` y genera el bundle de producción en `dist/`. |
| `npm run lint` | Analiza el código con ESLint en busca de errores o inconsistencias. |
| `npm run preview` | Previsualiza localmente el build de producción generado. |

---

## Personalización

Para actualizar el contenido del portafolio, solo es necesario editar `src/data/portfolioData.ts`:

- **Información de cabecera**: Modifica `personalInfo` (nombre, bio, ubicación, enlaces sociales).
- **Experiencia**: Añade o edita elementos en el arreglo `experiences`.
- **Proyectos**: Agrega o actualiza proyectos en `projects`.
- **Habilidades**: Configura tus tecnologías en `skillCategories`.

---

## Licencia

Distribuido bajo la licencia MIT. Consulta `LICENSE` para más información.
