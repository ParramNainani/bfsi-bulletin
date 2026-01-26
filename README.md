# BFSI Bulletin

A modern, single-page marketing website for BFSI (Banking, Financial Services, and Insurance) industry leaders, featuring conferences, roundtables, and branded content offerings.

## Features

- **Single-scroll experience** - Smooth navigation through Home, About, Competence, Value, and Contact sections
- **Dark theme** - Inverted color scheme with gold accents
- **Responsive design** - Works on all devices
- **Modern animations** - Built with Framer Motion
- **Contact form** - Frontend validation ready (backend to be configured)

## Tech Stack

- React 19
- TypeScript
- Vite
- Framer Motion
- React Router DOM

## Getting Started

### Install Dependencies

```bash
npm install
```

### Run Development Server

```bash
npm run dev
```

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
bfsi-bulletin/
├── src/
│   ├── components/       # Reusable components
│   │   ├── ContactForm.tsx
│   │   ├── Layout.tsx
│   │   ├── SiteFooter.tsx
│   │   └── SiteHeader.tsx
│   ├── pages/            # Page components
│   │   ├── NotFoundPage.tsx
│   │   └── SingleScrollPage.tsx
│   ├── App.css           # Main styles
│   ├── App.tsx           # App router
│   ├── index.css         # Global styles
│   └── main.tsx          # Entry point
├── index.html
├── package.json
├── tsconfig.json
└── vite.config.ts
```

## Configuration Notes

- **Backend**: Contact form currently logs to console. Configure your backend/Firebase later.
- **Images**: All images are placeholders. Add actual images when available.
- **About Section**: Intentionally left empty for future content.

## License

Private - All rights reserved
# bfsi-bulletin
