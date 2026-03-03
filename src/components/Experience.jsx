import React from 'react'
import { Briefcase, ArrowRight } from 'lucide-react'

export default function Experience() {
  const experiences = [
    {
      title: 'Software Developer (E-commerce B2B Platform)',
      company: 'RevolutionParts',
      period: '2025 - Present',
      location: 'Bolivia',
      description: 'Developing backend features for B2B commerce platform while managing containerized environments and Linux servers.',
      achievements: [
        'Implemented backend features for commerce platform',
        'Managed Dockerized environments for consistent deployments',
        'Supported production services and improved deployment workflows',
      ],
      technologies: ['PHP', 'JavaScript', 'Docker', 'Linux'],
    },
    {
      title: 'Software Engineer / Cloud & DevOps Engineer',
      company: 'arcserve',
      period: '2024 - 2025',
      location: 'Remote',
      description: 'Designed and maintained Kubernetes-based environments for production workloads. Implemented Infrastructure as Code using Terraform.',
      achievements: [
        'Standardized Kubernetes clusters improving deployment consistency',
        'Reduced deployment errors through automated CI/CD pipelines',
        'Improved infrastructure reliability using IaC practices',
        'Migrated from on-premise to cloud pipelines, reducing operational overhead',
      ],
      technologies: ['Kubernetes', 'AWS', 'GCP', 'Terraform', 'Docker', 'Ansible'],
    },
    {
      title: 'Software Developer & DevOps Engineer (CRM Platform)',
      company: 'Zendesk Integrations',
      period: '2022 - 2024',
      location: 'Bolivia',
      description: 'Developed backend features and integrations. Built and maintained REST APIs. Migrated infrastructure from Heroku to GCP.',
      achievements: [
        'Zero-downtime migration to cloud',
        'Improved deployment speed and environment consistency',
        'Increased system stability through containerization',
        'Built and maintained REST APIs for third-party integrations',
      ],
      technologies: ['PHP', 'Laravel', 'GCP', 'Docker', 'CI/CD', 'Linux'],
    },
  ]

  return (
    <section id="experience" className="relative py-24">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="mb-16 text-center">
          <h2 className="section-title">Work Experience</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full mx-auto mt-4"></div>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-600 to-transparent md:ml-0 z-0"></div>

          {/* Experience Items */}
          <div className="space-y-12">
            {experiences.map((exp, idx) => (
              <div key={idx} className={`relative z-10 ${idx % 2 === 0 ? 'md:pr-1/2' : 'md:ml-1/2 md:pl-12'}`}>
                {/* Timeline dot - REMOVED */}

                {/* Card */}
                <div className={`ml-8 md:m-0 ${idx % 2 === 0 ? 'md:pr-12' : ''}`}>
                  <div className="card stagger-item group hover:shadow-lg hover:shadow-blue-500/20">
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex items-center space-x-3">
                        <div className="p-2 bg-blue-600/20 rounded-lg">
                          <Briefcase className="w-5 h-5 text-blue-400" />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold dark:text-white text-gray-900 dark:group-hover:text-blue-400 group-hover:text-blue-600 transition-colors duration-300">
                            {exp.title}
                          </h3>
                          <p className="text-sm text-blue-400">{exp.company}</p>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center justify-between mb-4">
                      <p className="text-sm dark:text-gray-400 text-gray-700">{exp.location}</p>
                      <p className="text-sm font-medium dark:text-gray-500 text-gray-600">{exp.period}</p>
                    </div>

                    <p className="dark:text-gray-300 text-gray-800 mb-4">{exp.description}</p>

                    <div className="space-y-2 mb-4">
                      {exp.achievements.map((achievement, achIdx) => (
                        <div key={achIdx} className="flex items-start space-x-2">
                          <ArrowRight className="w-4 h-4 text-blue-500 flex-shrink-0 mt-0.5" />
                          <span className="text-sm dark:text-gray-300 text-gray-700">{achievement}</span>
                        </div>
                      ))}
                    </div>

                    <div className="flex flex-wrap gap-2 pt-4 border-t dark:border-gray-700 border-gray-300">
                      {exp.technologies.map((tech, techIdx) => (
                        <span
                          key={techIdx}
                          className="px-3 py-1 text-xs font-medium bg-blue-600/20 text-blue-300 rounded-full border border-blue-500/30 hover:border-blue-500/60 transition-colors duration-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
