import React, { useState, useEffect } from 'react'
import { Menu, X, Moon, Sun } from 'lucide-react'

export default function Navbar({ isDark, setIsDark, language, setLanguage }) {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  const labels = {
    es: {
      about: 'Acerca',
      skills: 'Habilidades',
      experience: 'Experiencia',
      contact: 'Contacto',
      langAria: 'Seleccionar idioma',
      toggleTheme: 'Cambiar tema',
      toggleMenu: 'Abrir menu',
      goTop: 'Ir arriba',
    },
    en: {
      about: 'About',
      skills: 'Skills',
      experience: 'Experience',
      contact: 'Contact',
      langAria: 'Select language',
      toggleTheme: 'Toggle dark mode',
      toggleMenu: 'Toggle menu',
      goTop: 'Go to top',
    },
  }

  const t = labels[language] || labels.en

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    element?.scrollIntoView({ behavior: 'smooth' })
    setIsOpen(false)
  }

  const navLinks = [
    { label: t.about, id: 'about' },
    { label: t.skills, id: 'skills' },
    { label: t.experience, id: 'experience' },
    { label: t.contact, id: 'contact' },
  ]

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled
          ? isDark
            ? 'bg-black/80 backdrop-blur-md shadow-lg shadow-blue-500/10 border-b border-gray-800'
            : 'bg-white/80 backdrop-blur-md shadow-lg shadow-blue-500/10 border-b border-gray-200'
          : isDark
            ? 'bg-transparent'
            : 'bg-white/50'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">
            <button
              type="button"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              aria-label={t.goTop}
              className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent hover:from-blue-300 hover:to-blue-500 transition-all duration-300"
            >
              M.
            </button>
          </div>

          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className={`px-3 py-2 text-sm font-medium transition-colors duration-200 relative group ${
                  isDark ? 'text-gray-300 hover:text-blue-400' : 'text-gray-700 hover:text-blue-600'
                }`}
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-blue-600 group-hover:w-full transition-all duration-300"></span>
              </button>
            ))}
          </div>

          <div className="flex items-center space-x-3">
            <select
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
              aria-label={t.langAria}
              className={`text-xs sm:text-sm rounded-lg px-2 py-1.5 border transition-colors duration-200 ${
                isDark
                  ? 'bg-gray-900 text-gray-200 border-gray-700'
                  : 'bg-white text-gray-800 border-gray-300'
              }`}
            >
              <option value="es">ES</option>
              <option value="en">EN</option>
            </select>

            <button
              onClick={() => setIsDark(!isDark)}
              className={`p-2 rounded-lg transition-colors duration-200 ${
                isDark
                  ? 'bg-gray-900 hover:bg-gray-800 text-yellow-400'
                  : 'bg-gray-200 hover:bg-gray-300 text-gray-800'
              }`}
              aria-label={t.toggleTheme}
            >
              {isDark ? <Sun size={20} /> : <Moon size={20} />}
            </button>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`md:hidden p-2 rounded-lg transition-colors duration-200 ${
                isDark
                  ? 'bg-gray-900 hover:bg-gray-800'
                  : 'bg-gray-200 hover:bg-gray-300'
              }`}
              aria-label={t.toggleMenu}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {isOpen && (
          <div className={`md:hidden pb-4 border-t ${isDark ? 'border-gray-800' : 'border-gray-300'}`}>
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className={`block w-full text-left px-4 py-3 text-sm font-medium transition-colors duration-200 ${
                  isDark
                    ? 'text-gray-300 hover:text-blue-400 hover:bg-gray-900/50'
                    : 'text-gray-700 hover:text-blue-600 hover:bg-gray-100/50'
                }`}
              >
                {link.label}
              </button>
            ))}
          </div>
        )}
      </div>
    </nav>
  )
}
