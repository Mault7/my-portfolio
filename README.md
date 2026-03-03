# Personal Portfolio Landing Page

A modern, responsive personal landing page built with React, Vite, and Tailwind CSS. Designed as a professional CV/portfolio showcasing a Systems Engineer and Cloud DevOps specialist.

## ✨ Features

- **Modern UI/UX**: Clean, minimal design with premium SaaS-like aesthetics
- **Dark Mode**: Default dark theme with beautiful blue accent colors
- **Fully Responsive**: Mobile-first design that works perfectly on all devices
- **Smooth Animations**: Fade-in effects, hover animations, and scroll transitions
- **Interactive Components**: Sticky navbar, smooth scrolling, working contact form
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

- Node.js 16+ and npm/yarn
- **OR** Docker and Docker Compose

### Installation (Local)

1. Clone or download the project
```bash
cd personal-portfolio
```

2. Install dependencies
```bash
npm install
```

3. Start development server
```bash
npm run dev
```

The application will open in your browser at `http://localhost:3000`

### Installation with Docker

#### Option 1: Development Mode (with hot reload)

```bash
docker-compose up app-dev
```

Visit `http://localhost:3000` in your browser. Changes to code will automatically refresh.

#### Option 2: Production Mode

```bash
docker-compose --profile prod up app-prod
```

Visit `http://localhost:8080` in your browser.

#### Build Docker Image Manually

Development:
```bash
docker build -t portfolio-dev .
docker run -p 3000:3000 -v $(pwd):/app portfolio-dev
```

Production:
```bash
docker build -f Dockerfile.prod -t portfolio-prod .
docker run -p 8080:3000 portfolio-prod
```

#### Stop Docker Containers

```bash
docker-compose down
```

## 📦 Build for Production

```bash
npm run build
```

The optimized files will be in the `dist/` folder.

## 🗂️ Project Structure

```
personal-portfolio/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx          # Navigation with dark mode toggle
│   │   ├── Hero.jsx            # Hero section
│   │   ├── About.jsx           # About me section
│   │   ├── Skills.jsx          # Skills showcase
│   │   ├── Experience.jsx      # Work experience timeline
│   │   ├── Projects.jsx        # Featured projects
│   │   ├── Contact.jsx         # Contact form
│   │   └── Footer.jsx          # Footer
│   ├── App.jsx                 # Main App component
│   ├── main.jsx                # React entry point
│   └── index.css               # Global styles with Tailwind
├── index.html                  # HTML entry point
├── tailwind.config.js          # Tailwind CSS configuration
├── postcss.config.js           # PostCSS configuration
├── vite.config.js              # Vite configuration
├── package.json                # Dependencies
└── README.md                   # This file
```

## 🎨 Color Palette

- **Primary Blue**: `#2563EB` - Main branding color
- **Dark Gray/Black**: `#000000` - Background
- **White**: `#FFFFFF` - Text and accents
- **Secondary Grays**: Used for text hierarchy and borders

## 🛠️ Technologies

### Core
- **React 18**: UI library with functional components and hooks
- **Vite**: Fast build tool and dev server
- **Tailwind CSS**: Utility-first CSS framework
- **Lucide React**: Beautiful SVG icon library

### Tools
- **PostCSS**: CSS processing
- **Autoprefixer**: Automatic vendor prefixes

## 📱 Responsive Design

The portfolio is optimized for:
- 📱 Mobile (320px+)
- 📱 Tablet (768px+)
- 🖥️ Desktop (1024px+)
- 🖥️ Ultra-wide (1280px+)

## ✨ Custom Features

### Dark Mode Toggle
Located in the navbar - defaults to dark mode. Toggle between dark and light themes seamlessly.

### Smooth Scrolling
All navigation links use smooth scroll behavior for a polished user experience.

### Sticky Navbar
Navigation bar becomes semi-transparent with backdrop blur effect when scrolling.

### Animations
- Fade-in animations on page load
- Slide-up animations for content sections
- Glow effects on interactive elements
- Hover effects on cards and buttons
- Staggered animations for list items

### Performance
- Optimized component rendering
- Efficient Tailwind CSS usage
- Minimal bundle size with Vite
- Fast load times

## 📝 Customization

### Update Personal Information

Edit the following files with your information:

1. **Hero Section** - `src/components/Hero.jsx`
   - Update name, title, and summary

2. **About Section** - `src/components/About.jsx`
   - Add your bio and strengths

3. **Skills Section** - `src/components/Skills.jsx`
   - Update skill categories and technologies

4. **Experience Section** - `src/components/Experience.jsx`
   - Add your work experience

5. **Projects Section** - `src/components/Projects.jsx`
   - Showcase your projects

6. **Contact Section** - `src/components/Contact.jsx`
   - Update contact information and links

### Customize Colors

Edit `tailwind.config.js`:

```js
colors: {
  primary: '#2563EB',        // Change primary color
  'primary-dark': '#1E40AF',
  'primary-light': '#3B82F6',
}
```

### Modify Font Family

Google Fonts are included in `index.html`. Change the fonts or add new ones as needed.

## 🔗 Social Links

Update social media links in:
- `src/components/Contact.jsx` - Social contact cards
- `src/components/Footer.jsx` - Footer social icons

## 📧 Contact Form

The contact form in `src/components/Contact.jsx` currently simulates submission. To enable real form handling:

1. Set up a backend API endpoint
2. Update the `handleSubmit` function to make a fetch request
3. Or use services like Formspree, EmailJS, or Netlify Forms

## 🚀 Deployment

### Deploy to Netlify
```bash
npm run build
# Upload the 'dist' folder to Netlify
```

### Deploy to Vercel
```bash
npm run build
# Push to GitHub and connect to Vercel
```

## 📄 License

This project is open source and available under the MIT License.

## 🙌 Credits

- Built with [React](https://react.dev)
- Styled with [Tailwind CSS](https://tailwindcss.com)
- Icons from [Lucide React](https://lucide.dev)
- Development with [Vite](https://vitejs.dev)

## 📞 Support

For questions or suggestions, feel free to create an issue or reach out through the contact form.

---

**Made with ❤️ using React & Tailwind CSS**
