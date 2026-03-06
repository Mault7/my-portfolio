import React, { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  const [isDark, setIsDark] = useState(true)
  const [language, setLanguage] = useState(() => localStorage.getItem('language') || 'es')

  useEffect(() => {
    localStorage.setItem('language', language)
  }, [language])

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark')
      document.body.style.backgroundColor = '#000000'
      document.body.style.color = '#ffffff'
    } else {
      document.documentElement.classList.remove('dark')
      document.body.style.backgroundColor = '#f9fafb'
      document.body.style.color = '#111827'
    }
  }, [isDark])

  return (
    <div className={isDark ? 'bg-black text-white' : 'bg-gray-50 text-gray-900'}>
      <Navbar
        isDark={isDark}
        setIsDark={setIsDark}
        language={language}
        setLanguage={setLanguage}
      />
      <main>
        <Hero language={language} />
        <About language={language} />
        <Skills language={language} />
        <Experience language={language} />
        <Contact language={language} />
      </main>
      <Footer language={language} />
    </div>
  )
}

export default App
