import React from 'react'
import { Github, ExternalLink, ArrowUpRight } from 'lucide-react'

export default function Projects({ language = 'en' }) {
  const githubProfileUrl = import.meta.env.VITE_GITHUB_PROFILE_URL || '#'

  const content = {
    es: {
      title: 'Proyectos Destacados',
      impact: 'Impacto:',
      more: 'mas',
      code: 'Codigo',
      demo: 'Demo',
      unavailable: 'no disponible',
      viewAll: 'Ver Todos los Proyectos',
      projects: [
        {
          title: 'Estandarizacion de Infraestructura Kubernetes',
          description: 'Estandarizacion de clusters Kubernetes en entornos productivos de arcserve, mejorando la consistencia de despliegue.',
          image: '☸️',
          technologies: ['Kubernetes', 'AWS', 'GCP', 'Terraform', 'Ansible'],
          impact: 'Mayor consistencia y reduccion de errores de configuracion en 80%',
          links: { github: '#', demo: '#' },
        },
        {
          title: 'Migracion Cloud de Heroku a GCP',
          description: 'Migracion sin downtime de una plataforma CRM de Heroku a Google Cloud con servicios containerizados.',
          image: '🚀',
          technologies: ['GCP', 'Docker', 'Terraform', 'CI/CD', 'PHP/Laravel'],
          impact: 'Migracion sin downtime y despliegues mas rapidos y consistentes',
          links: { github: '#', demo: '#' },
        },
        {
          title: 'Framework IaC con Terraform',
          description: 'Desarrollo de modulos Terraform reutilizables para estandarizar despliegues cloud en AWS y GCP.',
          image: '🏗️',
          technologies: ['Terraform', 'AWS', 'GCP', 'Ansible', 'Bash'],
          impact: '50% mas rapido en aprovisionamiento de infraestructura',
          links: { github: '#', demo: '#' },
        },
      ],
    },
    en: {
      title: 'Featured Projects',
      impact: 'Impact:',
      more: 'more',
      code: 'Code',
      demo: 'Demo',
      unavailable: 'unavailable',
      viewAll: 'View All Projects',
      projects: [
        {
          title: 'Kubernetes Infrastructure Standardization',
          description: 'Standardized Kubernetes clusters across production environments for arcserve, improving deployment consistency.',
          image: '☸️',
          technologies: ['Kubernetes', 'AWS', 'GCP', 'Terraform', 'Ansible'],
          impact: 'Improved deployment consistency and reduced configuration errors by 80%',
          links: { github: '#', demo: '#' },
        },
        {
          title: 'Heroku to GCP Cloud Migration',
          description: 'Led zero-downtime migration of a CRM platform from Heroku to Google Cloud with containerized services.',
          image: '🚀',
          technologies: ['GCP', 'Docker', 'Terraform', 'CI/CD', 'PHP/Laravel'],
          impact: 'Zero-downtime migration and faster, more consistent deployments',
          links: { github: '#', demo: '#' },
        },
        {
          title: 'Terraform Infrastructure as Code Framework',
          description: 'Built reusable Terraform modules to standardize cloud deployments across AWS and GCP environments.',
          image: '🏗️',
          technologies: ['Terraform', 'AWS', 'GCP', 'Ansible', 'Bash'],
          impact: '50% faster infrastructure provisioning and standardized deployments',
          links: { github: '#', demo: '#' },
        },
      ],
    },
  }

  const t = content[language] || content.en

  const renderProjectLink = (url, Icon, label) => {
    if (url && url !== '#') {
      return (
        <a href={url} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm dark:text-gray-400 text-gray-600 dark:hover:text-blue-400 hover:text-blue-600 transition-colors duration-300 group/link">
          <Icon size={16} />
          {label}
          <ArrowUpRight size={14} className="group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform duration-300" />
        </a>
      )
    }

    return (
      <span className="flex items-center gap-2 text-sm dark:text-gray-600 text-gray-500 cursor-not-allowed" aria-disabled="true">
        <Icon size={16} />
        {label} {t.unavailable}
      </span>
    )
  }

  return (
    <section id="projects" className="relative py-24 dark:bg-gray-900/30 bg-gray-100/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h2 className="section-title">{t.title}</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full mx-auto mt-4"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {t.projects.map((project, idx) => (
            <div key={idx} className="group relative h-full rounded-lg overflow-hidden dark:bg-gray-900 bg-white dark:border-gray-800 border-gray-300 dark:hover:border-blue-600/50 hover:border-blue-400 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/20">
              <div className="p-6 h-full flex flex-col relative z-10">
                <div className="text-5xl mb-4">{project.image}</div>
                <h3 className="text-xl font-bold dark:text-white text-gray-900 mb-2 dark:group-hover:text-blue-400 group-hover:text-blue-600 transition-colors duration-300">{project.title}</h3>
                <p className="dark:text-gray-400 text-gray-700 text-sm mb-4 flex-grow">{project.description}</p>

                <div className="mb-4 p-3 bg-blue-600/10 border border-blue-500/30 rounded-lg">
                  <p className="text-xs text-blue-300 font-medium">
                    <span className="font-bold">{t.impact}</span> {project.impact}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.slice(0, 3).map((tech, techIdx) => (
                    <span key={techIdx} className="px-2 py-1 text-xs font-medium dark:bg-gray-800 bg-gray-200 dark:text-gray-300 text-gray-700 rounded dark:group-hover:bg-blue-600/30 dark:group-hover:text-blue-300 group-hover:bg-blue-100 group-hover:text-blue-700 transition-colors duration-300">
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="px-2 py-1 text-xs font-medium dark:text-gray-400 text-gray-600">+{project.technologies.length - 3} {t.more}</span>
                  )}
                </div>

                <div className="flex gap-3 pt-4 dark:border-t dark:border-gray-800 border-t border-gray-300">
                  {renderProjectLink(project.links.github, Github, t.code)}
                  {renderProjectLink(project.links.demo, ExternalLink, t.demo)}
                </div>
              </div>

              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/0 to-blue-600/0 group-hover:from-blue-600/10 group-hover:to-blue-600/5 transition-all duration-300 pointer-events-none"></div>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-16">
          <a href={githubProfileUrl} target="_blank" rel="noopener noreferrer" className="btn-primary group">
            {t.viewAll}
            <ArrowUpRight size={20} className="ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
          </a>
        </div>
      </div>
    </section>
  )
}
