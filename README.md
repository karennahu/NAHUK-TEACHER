# 🎓 KNH Tutorías — Landing Page

Portafolio profesional y plataforma de tutorías personalizadas para Karen Navarro Hurtado.

## Stack
- React 18
- Tailwind CSS
- Google Fonts (Playfair Display + DM Sans)

## Requisitos previos
- Node.js 18+ (https://nodejs.org)
- npm 9+

## Instalación y ejecución

```bash
# 1. Instalar dependencias
npm install

# 2. Iniciar servidor de desarrollo
npm start
# → Abre http://localhost:3000 automáticamente

# 3. Build para producción
npm run build
```

## Estructura del proyecto
```
knh-tutoring/
├── public/
│   ├── assets/
│   │   ├── personaje/
│   │   │   ├── saludar/      ← frames Hero Section
│   │   │   ├── pintando/     ← frames Configurador
│   │   │   ├── programando/  ← frames Tarifas
│   │   │   └── gracias/      ← frames Contacto
│   │   ├── logos/            ← NaHuK logos
│   │   ├── reconocimientos/  ← documentos oficiales
│   │   └── tarjeta-contacto.jpg
│   └── index.html
└── src/
    ├── components/
    │   ├── SpriteAnimator.jsx   ← Sistema de animación frame-by-frame
    │   ├── Navbar.jsx
    │   ├── HeroSection.jsx
    │   ├── MateriasSection.jsx
    │   ├── ConfiguradorSection.jsx
    │   ├── LogrosSection.jsx
    │   ├── TarifasSection.jsx
    │   ├── ContactoSection.jsx
    │   └── Footer.jsx
    ├── App.jsx
    ├── index.js
    └── index.css
```

## Notas
- El formulario de contacto está preparado para conectar con EmailJS, Formspree o tu backend propio.
- Para producción, considera agregar Google Analytics y meta OG tags en public/index.html.
