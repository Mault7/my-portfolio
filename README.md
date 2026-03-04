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

3. Configure environment variables

```bash
cp .env.example .env
```

Then update values in `.env` for contact info, WhatsApp, CV filename, badges, and profile links.

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

The contact form is configured for direct WhatsApp messaging.
It uses:

- `VITE_WHATSAPP_NUMBER`
- `VITE_WHATSAPP_INTRO`

It also includes sender `Full Name`, `Email Address`, and `Message` in the prefilled WhatsApp text.

## 🚀 Deployment

### GitHub Pages

```bash
npm run build
npm run deploy
```

### GitHub Pages With GitHub Actions (Recommended)

This repository includes a workflow at `.github/workflows/deploy-pages.yml` that builds and deploys automatically on pushes to `main`.

#### Step-by-step setup

1. Push your repository to GitHub (default branch: `main`).
2. In GitHub, go to `Settings` -> `Pages`.
3. In `Build and deployment`, set:
   - `Source`: `GitHub Actions`
4. Go to `Settings` -> `Secrets and variables` -> `Actions`.
5. Add repository **Variables** (recommended for non-sensitive values):
   - `VITE_CONTACT_EMAIL`
   - `VITE_CONTACT_PHONE_E164`
   - `VITE_CONTACT_PHONE_DISPLAY`
   - `VITE_CONTACT_LINKEDIN_URL`
   - `VITE_CONTACT_LINKEDIN_HANDLE`
   - `VITE_WHATSAPP_INTRO`
   - `VITE_CV_FILE_NAME`
   - `VITE_TERRAFORM_BADGE_IMAGE_URL`
   - `VITE_TERRAFORM_BADGE_VERIFY_URL`
   - `VITE_GITHUB_PROFILE_URL`
6. Add repository **Secrets**:
   - `VITE_WHATSAPP_NUMBER`
7. Commit and push to `main`.
8. Open the `Actions` tab, run `Deploy To GitHub Pages` (or wait for push trigger).
9. After success, your site will be published at:
   - `https://<your-username>.github.io/my-portfolio/`

Notes:
- The workflow uses Vite environment variables (`VITE_*`) at build time.
- Keep `vite.config.js` base aligned with your repository name.
- You can copy values from `.env.example`.

### Netlify / Vercel

```bash
npm run build
```

Then deploy the generated `dist/` output or connect your repository.

## 📄 License

This project is open source and available under the MIT License.
