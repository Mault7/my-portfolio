import React from 'react'
import { Github, ExternalLink, ArrowUpRight } from 'lucide-react'

export default function Projects() {
  const renderProjectLink = (url, Icon, label) => {
    if (url && url !== '#') {
      return (
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-sm dark:text-gray-400 text-gray-600 dark:hover:text-blue-400 hover:text-blue-600 transition-colors duration-300 group/link"
        >
          <Icon size={16} />
          {label}
          <ArrowUpRight size={14} className="group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform duration-300" />
        </a>
      )
    }

    return (
      <span
        className="flex items-center gap-2 text-sm dark:text-gray-600 text-gray-500 cursor-not-allowed"
        aria-disabled="true"
      >
        <Icon size={16} />
        {label} unavailable
      </span>
    )
  }

  const projects = [
    {
      title: 'Kubernetes Infrastructure Standardization',
      description: 'Standardized Kubernetes clusters across production environments for arcserve, improving deployment consistency.',
      longDescription: 'Implemented cluster policies, resource quotas, and standardized configurations across environments.',
      image: '☸️',
      technologies: ['Kubernetes', 'AWS', 'GCP', 'Terraform', 'Ansible'],
      impact: 'Improved deployment consistency, reduced configuration errors by 80%',
      links: {
        github: '#',
        demo: '#',
      },
    },
    {
      title: 'Heroku to GCP Cloud Migration',
      description: 'Led zero-downtime migration of CRM platform from Heroku to Google Cloud Platform with containerized services.',
      longDescription: 'Migrated infrastructure, implemented automated deployment pipelines, and improved system stability.',
      image: '🚀',
      technologies: ['GCP', 'Docker', 'Terraform', 'CI/CD', 'PHP/Laravel'],
      impact: 'Zero-downtime migration, improved deployment speed and consistency',
      links: {
        github: '#',
        demo: '#',
      },
    },
    {
      title: 'Terraform Infrastructure as Code Framework',
      description: 'Built reusable Terraform modules for standardizing cloud deployments across AWS and GCP environments.',
      longDescription: 'Created modular, documented, and tested Terraform code for infrastructure automation.',
      image: '🏗️',
      technologies: ['Terraform', 'AWS', 'GCP', 'Ansible', 'Bash'],
      impact: '50% faster infrastructure provisioning, standardized deployments',
      links: {
        github: '#',
        demo: '#',
      },
    },
    {
      title: 'CI/CD Pipeline Migration & Automation',
      description: 'Migrated from on-premise CI/CD tooling to cloud-native pipelines, automating deployment workflows.',
      longDescription: 'Implemented automated testing, deployment strategies, and reduced manual operational overhead.',
      image: '⚙️',
      technologies: ['Bitbucket Pipelines', 'Jenkins', 'Docker', 'Bash', 'Git'],
      impact: 'Reduced manual tasks, improved deployment reliability and speed',
      links: {
        github: '#',
        demo: '#',
      },
    },
    {
      title: 'E-commerce B2B Platform Backend',
      description: 'Developed backend features for RevolutionParts B2B commerce platform with focus on API design and reliability.',
      longDescription: 'Built scalable backend services supporting B2B operations with containerized deployment.',
      image: '🛒',
      technologies: ['PHP', 'JavaScript', 'Docker', 'REST APIs', 'Linux'],
      impact: 'Stable production platform supporting B2B operations',
      links: {
        github: '#',
        demo: '#',
      },
    },
    {
      title: 'REST API Development & Integration',
      description: 'Built and maintained REST APIs for Zendesk integrations and third-party services.',
      longDescription: 'Designed and implemented scalable API architectures with proper documentation and testing.',
      image: '🔌',
      technologies: ['PHP/Laravel', 'JavaScript', 'REST APIs', 'SQL', 'Git'],
      impact: 'Enabled third-party integrations and extended platform capabilities',
      links: {
        github: '#',
        demo: '#',
      },
    },
  ]

  return (
    <section id="projects" className="relative py-24 dark:bg-gray-900/30 bg-gray-100/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="mb-16 text-center">
          <h2 className="section-title">Featured Projects</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full mx-auto mt-4"></div>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="group relative h-full rounded-lg overflow-hidden dark:bg-gray-900 bg-white dark:border-gray-800 border-gray-300 dark:hover:border-blue-600/50 hover:border-blue-400 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/20"
            >
              {/* Card Content */}
              <div className="p-6 h-full flex flex-col relative z-10">
                {/* Icon */}
                <div className="text-5xl mb-4">{project.image}</div>

                {/* Title */}
                <h3 className="text-xl font-bold dark:text-white text-gray-900 mb-2 dark:group-hover:text-blue-400 group-hover:text-blue-600 transition-colors duration-300">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="dark:text-gray-400 text-gray-700 text-sm mb-4 flex-grow">
                  {project.description}
                </p>

                {/* Impact Badge */}
                <div className="mb-4 p-3 bg-blue-600/10 border border-blue-500/30 rounded-lg">
                  <p className="text-xs text-blue-300 font-medium">
                    <span className="font-bold">Impact:</span> {project.impact}
                  </p>
                </div>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.slice(0, 3).map((tech, techIdx) => (
                    <span
                      key={techIdx}
                      className="px-2 py-1 text-xs font-medium dark:bg-gray-800 bg-gray-200 dark:text-gray-300 text-gray-700 rounded dark:group-hover:bg-blue-600/30 dark:group-hover:text-blue-300 group-hover:bg-blue-100 group-hover:text-blue-700 transition-colors duration-300"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="px-2 py-1 text-xs font-medium dark:text-gray-400 text-gray-600">
                      +{project.technologies.length - 3} more
                    </span>
                  )}
                </div>

                {/* Links */}
                <div className="flex gap-3 pt-4 dark:border-t dark:border-gray-800 border-t border-gray-300">
                  {renderProjectLink(project.links.github, Github, 'Code')}
                  {renderProjectLink(project.links.demo, ExternalLink, 'Demo')}
                </div>
              </div>

              {/* Hover Glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/0 to-blue-600/0 group-hover:from-blue-600/10 group-hover:to-blue-600/5 transition-all duration-300 pointer-events-none"></div>
            </div>
          ))}
        </div>

        {/* View All Projects */}
        <div className="flex justify-center mt-16">
          <a
            href="https://github.com/Mault7"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary group"
          >
            View All Projects
            <ArrowUpRight size={20} className="ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
          </a>
        </div>
      </div>
    </section>
  )
}
