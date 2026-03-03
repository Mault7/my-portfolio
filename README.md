# Personal Portfolio Landing Page

A modern, responsive personal landing page built with React, Vite, and Tailwind CSS. Designed as a professional CV/portfolio showcasing a Systems Engineer and Cloud DevOps specialist.

## ✨ Features

- **Modern UI/UX**: Clean, minimal design with premium SaaS-like aesthetics
- **Dark Mode**: Default dark theme with beautiful blue accent colors
- **Fully Responsive**: Mobile-first design that works perfectly on all devices
- **Smooth Animations**: Fade-in effects, hover animations, and scroll transitions
- **Interactive Components**: Sticky navbar, smooth scrolling, contact section
- **Professional Sections**:
  - Hero section with CTA buttons
  - About me with key strengths
  - Skills with categorized expertise
  - Experience timeline
  - Featured projects showcase
  - Contact form and social links
  - Footer

## 🚀 Quick Start

### Prerequisites

- Node.js 18+
- npm
- Optional: Docker + Docker Compose

### Local Development

1. Install dependencies

```bash
npm install
```

2. Start development server

```bash
npm run dev
```

App URL: `http://localhost:3000`

### Docker (Current Setup)

#### Development with Compose

```bash
docker compose up app-dev
```

If your system uses legacy Compose:

```bash
docker-compose up app-dev
```

App URL: `http://localhost:3000`

#### Production image (manual)

`docker-compose.yml` currently does **not** include `app-prod`.
Use `Dockerfile.prod` directly:

```bash
docker build -f Dockerfile.prod -t portfolio-prod .
docker run --rm -p 8080:3000 portfolio-prod
```

App URL: `http://localhost:8080`

#### Stop containers

```bash
docker compose down
```

## 📦 Build for Production

```bash
npm run build
```

The optimized files are generated in `dist/`.

## 🧪 Lint

```bash
npm run lint
```

## 🗂️ Project Structure

```text
my-portfolio/
├── src/
│   ├── components/
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── Dockerfile
├── Dockerfile.prod
├── docker-compose.yml
├── DOCKER.md
├── index.html
├── tailwind.config.js
├── postcss.config.js
├── vite.config.js
├── package.json
└── README.md
```

## 📧 Contact Form

The contact form in `src/components/Contact.jsx` currently simulates submission. To enable real form handling:

1. Set up a backend API endpoint.
2. Update `handleSubmit` to perform a real request.
3. Or use services like Formspree, EmailJS, or Netlify Forms.

## 🚀 Deployment

### GitHub Pages

```bash
npm run build
npm run deploy
```

### Netlify / Vercel

```bash
npm run build
```

Then deploy the generated `dist/` output or connect your repository.

## 📄 License

This project is open source and available under the MIT License.
