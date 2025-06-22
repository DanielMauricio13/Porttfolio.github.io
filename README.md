# Portfolio

This project is a personal portfolio website built with **Next.js** and **Tailwind CSS**. It showcases projects, services, and includes a contact form powered by EmailJS.

## Features

- Responsive layout styled with Tailwind CSS
- Animated transitions with Framer Motion
- Particle background effects
- Work and service carousels
- Contact form submission via EmailJS

## Getting Started

Install dependencies and start the development server:

```bash
npm install
npm run dev
```

The site will be available at `http://localhost:3000`.

### Building and Exporting

To create a production build and export static files:

```bash
npm run build
npm run export
```

The static output will be placed in the `out/` folder, suitable for deployment on platforms like GitHub Pages.

## Customizing

Images and assets live in the `public/` directory. Page content can be edited in the `pages/` and `components/` folders.

## Deployment

The `homepage` field in `package.json` is configured for GitHub Pages. After exporting, publish the `out/` directory to your `gh-pages` branch or hosting service of choice.

