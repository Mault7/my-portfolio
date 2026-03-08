import React from 'react'
import { Heart, Phone, Linkedin, Mail } from 'lucide-react'

export default function Footer({ language = 'en' }) {
  const normalizeExternalUrl = (url) => {
    if (!url) return ''
    return /^https?:\/\//i.test(url) ? url : `https://${url}`
  }

  const text = {
    es: {
      desc: 'Backend Software Developer | PHP & Laravel | DevOps: Linux, Docker, Kubernetes, CI/CD | Cloud: AWS & GCP | Terraform Certified | Ansible',
      links: 'Enlaces Rapidos',
      connect: 'Conecta Conmigo',
      madeWith: 'Hecho con',
      using: 'usando React y Tailwind CSS',
      rights: 'Todos los derechos reservados.',
      about: 'Acerca',
      contact: 'Contacto',
      introDefault: 'Hola, vi tu portafolio y quiero contactarte.',
    },
    en: {
      desc: 'Backend Software Developer | PHP & Laravel | DevOps: Linux, Docker, Kubernetes, CI/CD | Cloud: AWS & GCP | Terraform Certified | Ansible',
      links: 'Quick Links',
      connect: 'Connect With Me',
      madeWith: 'Made with',
      using: 'using React & Tailwind CSS',
      rights: 'All rights reserved.',
      about: 'About',
      contact: 'Contact',
      introDefault: 'Hello, I found your portfolio and I would like to contact you.',
    },
  }

  const t = text[language] || text.en

  const currentYear = new Date().getFullYear()
  const contactEmail = import.meta.env.VITE_CONTACT_EMAIL || ''
  const contactPhoneE164 = import.meta.env.VITE_CONTACT_PHONE_E164 || ''
  const linkedinUrl = normalizeExternalUrl(import.meta.env.VITE_CONTACT_LINKEDIN_URL || '')
  const whatsappNumber = import.meta.env.VITE_WHATSAPP_NUMBER || ''
  const whatsappIntro = import.meta.env.VITE_WHATSAPP_INTRO || t.introDefault
  const quickWhatsAppHref = whatsappNumber ? `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappIntro)}` : ''
  const phoneHref = quickWhatsAppHref || (contactPhoneE164 ? `tel:${contactPhoneE164}` : '')
  const hasEmail = Boolean(contactEmail)
  const hasLinkedIn = Boolean(linkedinUrl)
  const hasPhone = Boolean(phoneHref)

  const footerLinks = [
    { label: t.about, href: '#about' },
    { label: t.contact, href: '#contact' },
  ]

  return (
    <footer className="relative dark:border-gray-800 border-gray-300 dark:bg-black bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="absolute inset-0 gradient-bg opacity-20 pointer-events-none"></div>
        <div className="relative z-10">
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div>
              <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent mb-2">Mauricio Lara</div>
              <p className="text-sm dark:text-gray-400 text-gray-700">{t.desc}</p>
            </div>

            <div>
              <h4 className="text-sm font-bold dark:text-white text-gray-900 mb-4">{t.links}</h4>
              <ul className="space-y-2">
                {footerLinks.map((link) => (
                  <li key={link.label}>
                    <a href={link.href} className="text-sm dark:text-gray-400 text-gray-700 dark:hover:text-blue-400 hover:text-blue-600 transition-colors duration-200">{link.label}</a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-sm font-bold dark:text-white text-gray-900 mb-4">{t.connect}</h4>
              <div className="flex gap-3">
                {hasLinkedIn ? (
                  <a href={linkedinUrl} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="p-2 rounded-lg dark:bg-gray-900 bg-gray-200 dark:hover:bg-blue-600/20 hover:bg-blue-500/20 dark:text-gray-400 text-gray-700 dark:hover:text-blue-400 hover:text-blue-600 dark:border-gray-800 border-gray-300 dark:hover:border-blue-600/50 hover:border-blue-400 transition-all duration-300"><Linkedin size={20} /></a>
                ) : (
                  <span aria-label="LinkedIn unavailable" className="p-2 rounded-lg dark:bg-gray-900 bg-gray-200 dark:text-gray-600 text-gray-400 cursor-not-allowed dark:border-gray-800 border-gray-300"><Linkedin size={20} /></span>
                )}
                {hasEmail ? (
                  <a href={`mailto:${contactEmail}`} aria-label="Email" className="p-2 rounded-lg dark:bg-gray-900 bg-gray-200 dark:hover:bg-blue-600/20 hover:bg-blue-500/20 dark:text-gray-400 text-gray-700 dark:hover:text-blue-400 hover:text-blue-600 dark:border-gray-800 border-gray-300 dark:hover:border-blue-600/50 hover:border-blue-400 transition-all duration-300"><Mail size={20} /></a>
                ) : (
                  <span aria-label="Email unavailable" className="p-2 rounded-lg dark:bg-gray-900 bg-gray-200 dark:text-gray-600 text-gray-400 cursor-not-allowed dark:border-gray-800 border-gray-300"><Mail size={20} /></span>
                )}
                {hasPhone ? (
                  <a href={phoneHref} target={quickWhatsAppHref ? '_blank' : undefined} rel={quickWhatsAppHref ? 'noopener noreferrer' : undefined} aria-label="Phone" className="p-2 rounded-lg dark:bg-gray-900 bg-gray-200 dark:hover:bg-blue-600/20 hover:bg-blue-500/20 dark:text-gray-400 text-gray-700 dark:hover:text-blue-400 hover:text-blue-600 dark:border-gray-800 border-gray-300 dark:hover:border-blue-600/50 hover:border-blue-400 transition-all duration-300"><Phone size={20} /></a>
                ) : (
                  <span aria-label="Phone unavailable" className="p-2 rounded-lg dark:bg-gray-900 bg-gray-200 dark:text-gray-600 text-gray-400 cursor-not-allowed dark:border-gray-800 border-gray-300"><Phone size={20} /></span>
                )}
              </div>
            </div>
          </div>

          <div className="h-px bg-gradient-to-r from-transparent via-gray-800 dark:via-gray-800 to-transparent dark:to-transparent mb-8"></div>

          <div className="flex flex-col md:flex-row items-center justify-between">
            <p className="text-sm dark:text-gray-500 text-gray-700 text-center md:text-left">© {currentYear} Mauricio. {t.rights}</p>
            <p className="text-sm dark:text-gray-500 text-gray-700 flex items-center gap-1 mt-4 md:mt-0">
              {t.madeWith}
              <Heart size={16} className="text-blue-500 fill-blue-500" />
              {t.using}
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
