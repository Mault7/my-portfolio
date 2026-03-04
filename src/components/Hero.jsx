import React from 'react'
import { ArrowRight, Download } from 'lucide-react'

export default function Hero() {
  const cvFileName = import.meta.env.VITE_CV_FILE_NAME || ''
  const cvHref = cvFileName ? `${import.meta.env.BASE_URL}${cvFileName}` : '#'

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="relative min-h-screen pt-32 pb-20 flex items-center justify-center overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 gradient-bg opacity-100"></div>

      {/* Radial gradient overlay */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl opacity-30 animate-pulse"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl opacity-30 animate-pulse" style={{ animationDelay: '1s' }}></div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center animate-fade-in">
          {/* Greeting Badge */}
          <div className="inline-flex items-center justify-center px-4 py-2 mb-8 bg-blue-600/10 border border-blue-500/30 rounded-full hover:border-blue-500/60 transition-all duration-300">
            <span className="relative flex h-2 w-2 mr-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
            </span>
            <span className="text-sm font-medium dark:text-blue-300 text-blue-600">Welcome to my portfolio</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold mb-6 leading-tight">
            <span className="block dark:text-white text-gray-900">
              Hi, I&apos;m
              <span className="inline-block ml-3 wave-hand" aria-label="Waving hand" role="img">👋</span>
            </span>
            <span className="block bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 bg-clip-text text-transparent">
              Mauricio Lara
            </span>
          </h1>

          {/* Professional Title */}
          <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold dark:text-gray-300 text-gray-900 mb-6">
            Electronic Systems Engineer | DevOps | Cloud | Backend Developer
          </h2>

          {/* Description */}
          <p className="text-base sm:text-lg dark:text-gray-400 text-gray-700 mb-10 max-w-2xl mx-auto leading-relaxed">
            Software Engineer with 3+ years building cloud-native infrastructure and backend systems. Certified Terraform Associate with expertise in Kubernetes, AWS, GCP, and CI/CD automation. Passionate about infrastructure as code, containerized environments, and production reliability.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <button
              onClick={() => scrollTo('contact')}
              className="btn-primary group"
            >
              Get in Touch
              <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
            <a
              href={cvHref}
              download={cvFileName || undefined}
              className="btn-secondary group"
            >
              <Download size={20} className="mr-2" />
              Download CV
            </a>
          </div>

          {/* Scroll Indicator */}
          <div className="flex justify-center animate-bounce">
            <div className="flex flex-col items-center text-gray-500 hover:text-blue-400 transition-colors duration-300 cursor-pointer" 
              onClick={() => scrollTo('about')}>
              <span className="text-sm font-medium mb-2">Scroll to explore</span>
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
