import React, { useState } from 'react'
import { Mail, Linkedin, Phone, Send, CheckCircle, AlertCircle } from 'lucide-react'

export default function Contact({ language = 'en' }) {
  const normalizeExternalUrl = (url) => {
    if (!url) return ''
    return /^https?:\/\//i.test(url) ? url : `https://${url}`
  }

  const content = {
    es: {
      title: 'Contacto',
      subtitle: 'Envia tu mensaje desde este formulario y continua directamente por WhatsApp.',
      fullName: 'Nombre Completo',
      email: 'Correo Electronico',
      message: 'Mensaje',
      send: 'Enviar a WhatsApp',
      successTitle: 'Chat de WhatsApp abierto correctamente.',
      successText: 'Si no se abrio, habilita pop-ups y vuelve a intentar.',
      errorTitle: 'Mensaje no enviado',
      errorFill: 'Nombre, correo y mensaje son obligatorios.',
      errorConfig: 'WhatsApp no esta configurado. Define VITE_WHATSAPP_NUMBER.',
      emailLabel: 'Correo',
      linkedinLabel: 'LinkedIn',
      phoneLabel: 'Telefono',
      connect: 'Conecta Conmigo',
      response: 'Tiempo de respuesta:',
      responseText: 'Suelo responder rapido por WhatsApp.',
      placeholderName: 'Juan Perez',
      placeholderEmail: 'juan@ejemplo.com',
      placeholderMessage: 'Tu mensaje aqui...',
      setEmail: 'Configura VITE_CONTACT_EMAIL',
      setLinkedin: 'Configura VITE_CONTACT_LINKEDIN_HANDLE',
      setPhone: 'Configura VITE_CONTACT_PHONE_DISPLAY',
      introDefault: 'Hola, vi tu portafolio y quiero contactarte.',
    },
    en: {
      title: 'Get In Touch',
      subtitle: 'Send your message through this form and continue directly on WhatsApp.',
      fullName: 'Full Name',
      email: 'Email Address',
      message: 'Message',
      send: 'Send to WhatsApp',
      successTitle: 'WhatsApp chat opened successfully.',
      successText: 'If it did not open, please allow pop-ups and try again.',
      errorTitle: 'Message not sent',
      errorFill: 'Name, email, and message are required.',
      errorConfig: 'WhatsApp is not configured. Please set VITE_WHATSAPP_NUMBER.',
      emailLabel: 'Email',
      linkedinLabel: 'LinkedIn',
      phoneLabel: 'Phone',
      connect: 'Connect With Me',
      response: 'Response Time:',
      responseText: 'I usually reply quickly on WhatsApp.',
      placeholderName: 'John Doe',
      placeholderEmail: 'john@example.com',
      placeholderMessage: 'Your message here...',
      setEmail: 'Set VITE_CONTACT_EMAIL',
      setLinkedin: 'Set VITE_CONTACT_LINKEDIN_HANDLE',
      setPhone: 'Set VITE_CONTACT_PHONE_DISPLAY',
      introDefault: 'Hello, I found your portfolio and I would like to contact you.',
    },
  }

  const t = content[language] || content.en

  const contactEmail = import.meta.env.VITE_CONTACT_EMAIL || ''
  const contactPhoneE164 = import.meta.env.VITE_CONTACT_PHONE_E164 || ''
  const contactPhoneDisplay = import.meta.env.VITE_CONTACT_PHONE_DISPLAY || ''
  const linkedinUrl = normalizeExternalUrl(import.meta.env.VITE_CONTACT_LINKEDIN_URL || '')
  const linkedinHandle = import.meta.env.VITE_CONTACT_LINKEDIN_HANDLE || ''
  const whatsappNumber = import.meta.env.VITE_WHATSAPP_NUMBER || ''
  const whatsappIntro = import.meta.env.VITE_WHATSAPP_INTRO || t.introDefault
  const quickWhatsAppHref = whatsappNumber ? `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappIntro)}` : ''

  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState(null)
  const [errorMessage, setErrorMessage] = useState(t.errorFill)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    const name = formData.name.trim()
    const email = formData.email.trim()
    const message = formData.message.trim()

    if (!name || !email || !message) {
      setErrorMessage(t.errorFill)
      setStatus('error')
      setTimeout(() => setStatus(null), 5000)
      return
    }

    if (!whatsappNumber) {
      setErrorMessage(t.errorConfig)
      setStatus('error')
      setTimeout(() => setStatus(null), 5000)
      return
    }

    const whatsappText = [
      whatsappIntro,
      '',
      `${t.fullName}: ${name}`,
      `${t.email}: ${email}`,
      `${t.message}: ${message}`,
    ].join('\n')

    const whatsappHref = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappText)}`

    const openedTab = window.open(whatsappHref, '_blank', 'noopener,noreferrer')
    if (!openedTab) {
      window.location.href = whatsappHref
    }

    setStatus('success')
    setFormData({ name: '', email: '', message: '' })
    setTimeout(() => setStatus(null), 5000)
  }

  return (
    <section id="contact" className="relative py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h2 className="section-title">{t.title}</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full mx-auto mt-4"></div>
          <p className="dark:text-gray-400 text-gray-700 mt-6 max-w-2xl mx-auto">{t.subtitle}</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div className="animate-fade-in">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium dark:text-gray-300 text-gray-900 mb-2">{t.fullName}</label>
                <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} placeholder={t.placeholderName} className="w-full px-4 py-3 dark:bg-gray-900 bg-white dark:border-gray-800 border-gray-300 rounded-lg dark:text-white text-black dark:placeholder-gray-500 placeholder-gray-400 focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20 transition-all duration-300" required />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium dark:text-gray-300 text-gray-900 mb-2">{t.email}</label>
                <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} placeholder={t.placeholderEmail} className="w-full px-4 py-3 dark:bg-gray-900 bg-white dark:border-gray-800 border-gray-300 rounded-lg dark:text-white text-black dark:placeholder-gray-500 placeholder-gray-400 focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20 transition-all duration-300" required />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium dark:text-gray-300 text-gray-900 mb-2">{t.message}</label>
                <textarea id="message" name="message" value={formData.message} onChange={handleChange} placeholder={t.placeholderMessage} rows="5" className="w-full px-4 py-3 dark:bg-gray-900 bg-white dark:border-gray-800 border-gray-300 rounded-lg dark:text-white text-black dark:placeholder-gray-500 placeholder-gray-400 focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20 transition-all duration-300 resize-none" required></textarea>
              </div>

              <div className="space-y-3">
                <button type="submit" className="w-full inline-flex items-center justify-center px-6 py-3 font-semibold text-white bg-[#25D366] rounded-lg transition-all duration-300 hover:bg-[#1EBE57] hover:shadow-lg hover:shadow-[#25D366]/40 active:scale-95">
                  {t.send}
                  <Send size={20} className="ml-2" />
                </button>

                {status === 'success' && (
                  <div className="p-4 bg-green-600/20 border border-green-600/50 rounded-lg flex items-center gap-3 text-green-300 animate-fade-in">
                    <CheckCircle size={20} />
                    <div>
                      <p className="font-medium">{t.successTitle}</p>
                      <p className="text-sm opacity-90">{t.successText}</p>
                    </div>
                  </div>
                )}

                {status === 'error' && (
                  <div className="p-4 bg-red-600/20 border border-red-600/50 rounded-lg flex items-center gap-3 text-red-300 animate-fade-in">
                    <AlertCircle size={20} />
                    <div>
                      <p className="font-medium">{t.errorTitle}</p>
                      <p className="text-sm opacity-90">{errorMessage}</p>
                    </div>
                  </div>
                )}
              </div>
            </form>
          </div>

          <div className="space-y-8 animate-slide-up">
            <div className="space-y-4">
              <div className="card group">
                <div className="flex items-center space-x-4">
                  <div className="flex-shrink-0"><div className="flex items-center justify-center h-12 w-12 rounded-lg bg-blue-600/20"><Mail className="h-6 w-6 text-blue-400" /></div></div>
                  <div>
                    <h4 className="text-sm font-bold dark:text-white text-gray-900">{t.emailLabel}</h4>
                    <a href={contactEmail ? `mailto:${contactEmail}` : '#'} className="text-sm text-blue-400 hover:text-blue-300 transition-colors">{contactEmail || t.setEmail}</a>
                  </div>
                </div>
              </div>

              <div className="card group">
                <div className="flex items-center space-x-4">
                  <div className="flex-shrink-0"><div className="flex items-center justify-center h-12 w-12 rounded-lg bg-blue-600/20"><Linkedin className="h-6 w-6 text-blue-400" /></div></div>
                  <div>
                    <h4 className="text-sm font-bold dark:text-white text-gray-900">{t.linkedinLabel}</h4>
                    <a href={linkedinUrl || '#'} target="_blank" rel="noopener noreferrer" className="text-sm text-blue-400 hover:text-blue-300 transition-colors">{linkedinHandle || t.setLinkedin}</a>
                  </div>
                </div>
              </div>

              <div className="card group">
                <div className="flex items-center space-x-4">
                  <div className="flex-shrink-0"><div className="flex items-center justify-center h-12 w-12 rounded-lg bg-blue-600/20"><Phone className="h-6 w-6 text-blue-400" /></div></div>
                  <div>
                    <h4 className="text-sm font-bold dark:text-white text-gray-900">{t.phoneLabel}</h4>
                    <a href={quickWhatsAppHref || (contactPhoneE164 ? `tel:${contactPhoneE164}` : '#')} target={quickWhatsAppHref ? '_blank' : undefined} rel={quickWhatsAppHref ? 'noopener noreferrer' : undefined} className="text-sm text-blue-400 hover:text-blue-300 transition-colors">{contactPhoneDisplay || t.setPhone}</a>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-sm font-bold dark:text-white text-gray-900 mb-4">{t.connect}</h4>
              <div className="flex gap-3">
                <a href={linkedinUrl || '#'} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="p-3 rounded-lg dark:bg-gray-900 bg-gray-200 dark:border-gray-800 border-gray-300 dark:text-gray-400 text-gray-600 transition-all duration-300 hover:border-blue-600/50 hover:text-blue-600"><Linkedin size={20} /></a>
                <a href={contactEmail ? `mailto:${contactEmail}` : '#'} aria-label="Email" className="p-3 rounded-lg dark:bg-gray-900 bg-gray-200 dark:border-gray-800 border-gray-300 dark:text-gray-400 text-gray-600 transition-all duration-300 hover:border-blue-600/50 hover:text-blue-600"><Mail size={20} /></a>
                <a href={quickWhatsAppHref || (contactPhoneE164 ? `tel:${contactPhoneE164}` : '#')} target={quickWhatsAppHref ? '_blank' : undefined} rel={quickWhatsAppHref ? 'noopener noreferrer' : undefined} aria-label="Phone" className="p-3 rounded-lg dark:bg-gray-900 bg-gray-200 dark:border-gray-800 border-gray-300 dark:text-gray-400 text-gray-600 transition-all duration-300 hover:border-blue-600/50 hover:text-blue-600"><Phone size={20} /></a>
              </div>
            </div>

            <div className="p-4 bg-blue-600/10 border border-blue-500/30 rounded-lg">
              <p className="text-sm text-blue-300"><span className="font-semibold">{t.response}</span> {t.responseText}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
