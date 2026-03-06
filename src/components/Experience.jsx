import React from 'react'

export default function Experience({ language = 'en' }) {
  const content = {
    es: {
      title: 'Experiencia Laboral',
      experiences: [
        {
          title: 'Fullstack Developer (Plataforma E-commerce B2B)',
          company: 'RevolutionParts',
          companyMark: 'R',
          period: '2025 - Presente',
          location: 'Remoto',
          achievements: [
            'Implemente nuevas funcionalidades para la plataforma principal y el modulo B2B.',
            'Realice mantenimiento continuo sobre componentes existentes.',
            'Diagnostique y resolvi bugs en produccion para mejorar estabilidad.',
          ],
        },
        {
          title: 'Cloud & DevOps Engineer',
          company: 'arcserve',
          companyMark: 'A',
          period: '2024 - 2025',
          location: 'Remote',
          achievements: [
            'Estandarice clusters Kubernetes para mejorar consistencia.',
            'Reduje errores de despliegue con pipelines CI/CD.',
            'Mejore confiabilidad de infraestructura con IaC.',
            'Migre de pipelines on-premise a cloud, reduciendo carga operativa.',
          ],
        },
        {
          title: 'Desarrollador de Software y DevOps (Plataforma CRM)',
          company: 'Zendesk Integrations (assuresoft)',
          companyMark: 'Z',
          period: '2022 - 2024',
          location: 'Bolivia',
          achievements: [
            'Migre a cloud sin downtime.',
            'Mejore velocidad de despliegue y consistencia entre ambientes.',
            'Aumente estabilidad mediante containerizacion.',
            'Construccion y mantenimiento de APIs REST para integraciones.',
          ],
        },
      ],
    },
    en: {
      title: 'Work Experience',
      experiences: [
        {
          title: 'Fullstack Developer (E-commerce B2B Platform)',
          company: 'RevolutionParts',
          companyMark: 'R',
          period: '2025 - Present',
          location: 'Remote',
          achievements: [
            'Implemented new features for the main platform and the B2B module.',
            'Performed continuous maintenance on existing components.',
            'Diagnosed and fixed production bugs to improve stability.',
          ],
        },
        {
          title: 'Cloud & DevOps Engineer',
          company: 'arcserve',
          companyMark: 'A',
          period: '2024 - 2025',
          location: 'Remote',
          achievements: [
            'Standardized Kubernetes clusters improving deployment consistency.',
            'Reduced deployment errors through automated CI/CD pipelines.',
            'Improved infrastructure reliability using IaC practices.',
            'Migrated from on-premise to cloud pipelines, reducing operational overhead.',
          ],
        },
        {
          title: 'Software Developer and DevOps Engineer (CRM Platform)',
          company: 'Zendesk Integrations (assuresoft)',
          companyMark: 'Z',
          period: '2022 - 2024',
          location: 'Bolivia',
          achievements: [
            'Delivered a zero-downtime migration to cloud.',
            'Improved deployment speed and environment consistency.',
            'Increased system stability through containerization.',
            'Built and maintained REST APIs for third-party integrations.',
          ],
        },
      ],
    },
  }

  const t = content[language] || content.en

  return (
    <section id="experience" className="relative py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h2 className="section-title">{t.title}</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full mx-auto mt-4"></div>
        </div>

        <div className="relative">
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-blue-500 via-blue-400/70 to-transparent md:-translate-x-1/2"></div>

          <div className="space-y-12 md:space-y-16">
            {t.experiences.map((exp, idx) => {
              const isLeft = idx % 2 === 0

              return (
                <div key={idx} className="relative">
                  <div className="absolute left-6 md:left-1/2 top-6 -translate-x-1/2 z-20">
                    <div className="h-12 w-12 rounded-full bg-gray-100 dark:bg-gray-900 border-2 border-blue-500 shadow-lg shadow-blue-500/30 flex items-center justify-center">
                      <span className="text-sm font-bold text-blue-600 dark:text-blue-400">{exp.companyMark}</span>
                    </div>
                  </div>

                  <div className={`hidden md:block absolute top-8 ${isLeft ? 'left-[calc(50%+2.5rem)] text-left' : 'right-[calc(50%+2.5rem)] text-right'}`}>
                    <p className="text-sm font-semibold dark:text-gray-300 text-gray-700">{exp.period}</p>
                  </div>

                  <div
                    className={`ml-16 md:ml-0 md:w-[calc(50%-2.5rem)] ${isLeft ? 'md:mr-auto' : 'md:ml-auto'}`}
                  >
                    <div className="card p-6 md:p-7 relative overflow-hidden dark:bg-[#10142a] bg-white/95 border-blue-500/20 dark:hover:border-blue-500/50 hover:border-blue-400/60 transition-all duration-300">
                      <div className={`hidden md:block absolute top-8 h-3 w-3 rotate-45 dark:bg-[#10142a] bg-white border-t border-r border-blue-500/20 ${isLeft ? '-right-1.5' : '-left-1.5'}`}></div>

                      <div className="mb-4">
                        <h3 className="text-xl md:text-2xl font-bold dark:text-white text-gray-900">{exp.title}</h3>
                        <p className="text-blue-400 font-medium mt-1">{exp.company}</p>
                        <p className="md:hidden text-sm dark:text-gray-400 text-gray-600 mt-1">{exp.period}</p>
                        <p className="text-sm dark:text-gray-400 text-gray-600 mt-1">{exp.location}</p>
                      </div>

                      <ul className="space-y-2">
                        {exp.achievements.map((achievement, achIdx) => (
                          <li key={achIdx} className="flex items-start gap-2 dark:text-gray-300 text-gray-700 text-sm">
                            <span className="mt-[7px] h-1.5 w-1.5 rounded-full bg-blue-500"></span>
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
