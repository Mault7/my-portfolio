import React, { useState } from 'react'
import { Mail, Linkedin, Github, Twitter, Send, CheckCircle, AlertCircle } from 'lucide-react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [status, setStatus] = useState(null)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    
    // Simulate form submission
    setStatus('loading')
    setTimeout(() => {
      if (formData.name && formData.email && formData.message) {
        setStatus('success')
        setFormData({ name: '', email: '', message: '' })
        setTimeout(() => setStatus(null), 5000)
      } else {
        setStatus('error')
        setTimeout(() => setStatus(null), 5000)
      }
    }, 1000)
  }

  return (
    <section id="contact" className="relative py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="mb-16 text-center">
          <h2 className="section-title">Get In Touch</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full mx-auto mt-4"></div>
          <p className="dark:text-gray-400 text-gray-700 mt-6 max-w-2xl mx-auto">
            I'm always interested in hearing about new projects and opportunities. 
            Feel free to reach out with any questions or just to say hello!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          {/* Contact Form */}
          <div className="animate-fade-in">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Field */}
              <div>
                <label htmlFor="name" className="block text-sm font-medium dark:text-gray-300 text-gray-900 mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  className="w-full px-4 py-3 dark:bg-gray-900 bg-white dark:border-gray-800 border-gray-300 rounded-lg dark:text-white text-black dark:placeholder-gray-500 placeholder-gray-400 focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20 transition-all duration-300"
                  required
                />
              </div>

              {/* Email Field */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium dark:text-gray-300 text-gray-900 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="john@example.com"
                  className="w-full px-4 py-3 dark:bg-gray-900 bg-white dark:border-gray-800 border-gray-300 rounded-lg dark:text-white text-black dark:placeholder-gray-500 placeholder-gray-400 focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20 transition-all duration-300"
                  required
                />
              </div>

              {/* Message Field */}
              <div>
                <label htmlFor="message" className="block text-sm font-medium dark:text-gray-300 text-gray-900 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your message here..."
                  rows="5"
                  className="w-full px-4 py-3 dark:bg-gray-900 bg-white dark:border-gray-800 border-gray-300 rounded-lg dark:text-white text-black dark:placeholder-gray-500 placeholder-gray-400 focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20 transition-all duration-300 resize-none"
                  required
                ></textarea>
              </div>

              {/* Submit Button & Status */}
              <div className="space-y-3">
                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="w-full btn-primary justify-center disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {status === 'loading' ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <Send size={20} className="ml-2" />
                    </>
                  )}
                </button>

                {/* Status Messages */}
                {status === 'success' && (
                  <div className="p-4 bg-green-600/20 border border-green-600/50 rounded-lg flex items-center gap-3 text-green-300 animate-fade-in">
                    <CheckCircle size={20} />
                    <div>
                      <p className="font-medium">Message sent successfully!</p>
                      <p className="text-sm opacity-90">I'll get back to you within 24 hours.</p>
                    </div>
                  </div>
                )}

                {status === 'error' && (
                  <div className="p-4 bg-red-600/20 border border-red-600/50 rounded-lg flex items-center gap-3 text-red-300 animate-fade-in">
                    <AlertCircle size={20} />
                    <div>
                      <p className="font-medium">Please fill in all fields</p>
                      <p className="text-sm opacity-90">Name, email, and message are required.</p>
                    </div>
                  </div>
                )}
              </div>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-8 animate-slide-up">
            {/* Info Cards */}
            <div className="space-y-4">
              <div className="card group">
                <div className="flex items-center space-x-4">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-blue-600/20">
                      <Mail className="h-6 w-6 text-blue-400" />
                    </div>
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white">Email</h4>
                    <a href="mailto:mauri.It0408@gmail.com" className="text-sm text-blue-400 hover:text-blue-300 transition-colors">
                      mauri.It0408@gmail.com
                    </a>
                  </div>
                </div>
              </div>

              <div className="card group">
                <div className="flex items-center space-x-4">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-blue-600/20">
                      <Linkedin className="h-6 w-6 text-blue-400" />
                    </div>
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white">LinkedIn</h4>
                    <a href="https://linkedin.com/in/mauricio-lara-tapia-86911626a" target="_blank" rel="noopener noreferrer" className="text-sm text-blue-400 hover:text-blue-300 transition-colors">
                      /mauricio-lara-tapia
                    </a>
                  </div>
                </div>
              </div>

              <div className="card group">
                <div className="flex items-center space-x-4">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-blue-600/20">
                      <Twitter className="h-6 w-6 text-blue-400" />
                    </div>
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white">Phone</h4>
                    <a href="tel:+59174839759" className="text-sm text-blue-400 hover:text-blue-300 transition-colors">
                      +591 74839759
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h4 className="text-sm font-bold text-white mb-4">Connect With Me</h4>
              <div className="flex gap-3">
                <a
                  href="https://linkedin.com/in/mauricio-lara-tapia-86911626a"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="p-3 rounded-lg dark:bg-gray-900 bg-gray-200 dark:border-gray-800 border-gray-300 dark:text-gray-400 text-gray-600 transition-all duration-300 hover:border-blue-600/50 hover:text-blue-600"
                >
                  <Linkedin size={20} />
                </a>
                <a
                  href="mailto:mauri.It0408@gmail.com"
                  aria-label="Email"
                  className="p-3 rounded-lg dark:bg-gray-900 bg-gray-200 dark:border-gray-800 border-gray-300 dark:text-gray-400 text-gray-600 transition-all duration-300 hover:border-blue-600/50 hover:text-blue-600"
                >
                  <Mail size={20} />
                </a>
                <a
                  href="tel:+59174839759"
                  aria-label="Phone"
                  className="p-3 rounded-lg dark:bg-gray-900 bg-gray-200 dark:border-gray-800 border-gray-300 dark:text-gray-400 text-gray-600 transition-all duration-300 hover:border-blue-600/50 hover:text-blue-600"
                >
                  <Twitter size={20} />
                </a>
              </div>
            </div>

            {/* Response Time */}
            <div className="p-4 bg-blue-600/10 border border-blue-500/30 rounded-lg">
              <p className="text-sm text-blue-300">
                <span className="font-semibold">Response Time:</span> I typically respond within 24 hours.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
