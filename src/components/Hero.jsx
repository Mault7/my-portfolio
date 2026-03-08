import React from 'react'
import { ArrowRight, Download } from 'lucide-react'

export default function Hero({ language = 'en' }) {
  const cvFileName = import.meta.env.VITE_CV_FILE_NAME || ''
  const cvHref = cvFileName ? `${import.meta.env.BASE_URL}${cvFileName}` : '#'
  const careerStartDate = new Date(2022, 0, 1)
  const now = new Date()
  let yearsOfExperience = now.getFullYear() - careerStartDate.getFullYear()
  const hasReachedAnniversary =
    now.getMonth() > careerStartDate.getMonth() ||
    (now.getMonth() === careerStartDate.getMonth() && now.getDate() >= careerStartDate.getDate())
  if (!hasReachedAnniversary) {
    yearsOfExperience -= 1
  }
  const yearsCount = Math.max(0, yearsOfExperience)
  const experienceLabel =
    language === 'es'
      ? `${yearsCount}+ ${yearsCount === 1 ? 'año' : 'años'}`
      : `${yearsCount}+ ${yearsCount === 1 ? 'year' : 'years'}`

  const content = {
    es: {
      badge: 'Bienvenido a mi portafolio',
      hello: 'Hola, soy',
      role: 'Ingeniero en Sistemas Electronicos | DevOps | Cloud | Backend Developer',
      summary1:
        'Graduado en Ingenieria de Sistemas Electronicos con 1 año de experiencia en desarrollo de firmware embebido para sistemas IoT, trabajando con lenguaje C, brokers MQTT y plataformas como Arduino, STM32 y ESP32.',
      summary2:
        'Soy Software Developer Full Stack con experiencia en desarrollo backend utilizando PHP vanilla y el framework Laravel, asi como en desarrollo frontend con React.',
      summary3Start:
        'También me desempeño como Cloud and DevOps Engineer. A lo largo de más de ',
      summary3End:
        ' de experiencia profesional desde enero de 2022, he trabajado en desarrollo de software y en la construccion y operacion de infraestructura cloud escalable y confiable.',
      stack:
        'HashiCorp Certified: Terraform Associate (004) | Terraform | Ansible | CI/CD | AWS | GCP | Kubernetes | Docker',
      ctaContact: 'Contactame',
      ctaCv: 'Descargar CV',
      scroll: 'Desliza para explorar',
    },
    en: {
      badge: 'Welcome to my portfolio',
      hello: "Hi, I'm",
      role: 'Electronic Systems Engineer | DevOps | Cloud | Backend Developer',
      summary1:
        'Systems and Electronic Engineering graduate with 1 year of experience in embedded firmware development for IoT systems, working with the C programming language, MQTT brokers, and platforms such as Arduino, STM32, and ESP32.',
      summary2:
        'I am a Full Stack Software Developer with backend experience using vanilla PHP and the Laravel framework, as well as frontend development with React.',
      summary3Start:
        'I also work as a Cloud and DevOps Engineer. Across more than ',
      summary3End:
        ' of professional experience since January 2022, I have worked in software development and in the design and operation of scalable, reliable cloud infrastructure.',
      stack:
        'HashiCorp Certified: Terraform Associate (004) | Terraform | Ansible | CI/CD | AWS | GCP | Kubernetes | Docker',
      ctaContact: 'Get in Touch',
      ctaCv: 'Download CV',
      scroll: 'Scroll to explore',
    },
  }

  const t = content[language] || content.en

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="relative min-h-screen pt-32 pb-20 flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 gradient-bg opacity-100"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl opacity-30 animate-pulse"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl opacity-30 animate-pulse" style={{ animationDelay: '1s' }}></div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center animate-fade-in">
          <div className="inline-flex items-center justify-center px-4 py-2 mb-8 bg-blue-600/10 border border-blue-500/30 rounded-full hover:border-blue-500/60 transition-all duration-300">
            <span className="relative flex h-2 w-2 mr-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
            </span>
            <span className="text-sm font-medium dark:text-blue-300 text-blue-600">{t.badge}</span>
          </div>

          <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold mb-6 leading-tight">
            <span className="block dark:text-white text-gray-900">
              {t.hello}
              <span className="inline-block ml-3 wave-hand" aria-label="Waving hand" role="img">👋</span>
            </span>
            <span className="block bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 bg-clip-text text-transparent">
              Mauricio Lara
            </span>
          </h1>

          <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold dark:text-gray-300 text-gray-900 mb-6">
            {t.role}
          </h2>

          <div className="mb-10 max-w-4xl mx-auto space-y-3">
            <p className="text-base sm:text-lg dark:text-gray-400 text-gray-700 leading-relaxed">{t.summary1}</p>
            <p className="text-base sm:text-lg dark:text-gray-400 text-gray-700 leading-relaxed">{t.summary2}</p>
            <p className="text-base sm:text-lg dark:text-gray-400 text-gray-700 leading-relaxed">
              {t.summary3Start}
              <span className="font-semibold dark:text-blue-300 text-blue-600">{experienceLabel}</span>
              {t.summary3End}
            </p>
            <p className="text-sm sm:text-base font-medium dark:text-blue-300 text-blue-700">
              {t.stack}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <button onClick={() => scrollTo('contact')} className="btn-primary group">
              {t.ctaContact}
              <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
            <a href={cvHref} download={cvFileName || undefined} className="btn-secondary group">
              <Download size={20} className="mr-2" />
              {t.ctaCv}
            </a>
          </div>

          <div className="flex justify-center animate-bounce">
            <div className="flex flex-col items-center text-gray-500 hover:text-blue-400 transition-colors duration-300 cursor-pointer" onClick={() => scrollTo('about')}>
              <span className="text-sm font-medium mb-2">{t.scroll}</span>
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
