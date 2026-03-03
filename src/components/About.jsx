import React from 'react'
import { Code2, Cloud, Zap, Target } from 'lucide-react'

export default function About() {
  const strengths = [
    {
      icon: Cloud,
      title: 'Cloud Platforms',
      description: 'AWS & GCP expertise. Compute, networking, IAM, and production deployments'
    },
    {
      icon: Code2,
      title: 'Infrastructure as Code',
      description: 'Terraform expert (Certified Associate 004). Ansible for configuration management'
    },
    {
      icon: Zap,
      title: 'Container Orchestration',
      description: 'Kubernetes cluster administration, deployments, scaling, and standardization'
    },
    {
      icon: Target,
      title: 'Backend Development',
      description: 'PHP/Laravel expertise. Microservices architecture and REST APIs'
    },
  ]

  return (
    <section id="about" className="relative py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="mb-16 text-center">
          <h2 className="section-title">About Me</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full mx-auto mt-4"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          {/* Left Side - Bio */}
          <div className="space-y-6 animate-fade-in">
            <p className="text-lg dark:text-gray-300 text-gray-700 leading-relaxed">
              Electronic Systems Engineer with 3+ years of hands-on experience building cloud-native infrastructure and backend systems. 
              I'm passionate about designing scalable architectures, automating deployments, and ensuring production reliability. 
              Certified Terraform Associate with a strong foundation in microservices and containerized environments.
            </p>
            
            <p className="text-lg dark:text-gray-300 text-gray-700 leading-relaxed">
              My expertise spans across cloud platforms (AWS, GCP), container orchestration (Kubernetes, Docker), 
              Infrastructure as Code (Terraform, Ansible), and CI/CD automation (Bitbucket Pipelines, Jenkins). 
              I've successfully led cloud migrations, standardized deployment processes, and reduced operational overhead through automation.
            </p>

            <p className="text-lg dark:text-gray-300 text-gray-700 leading-relaxed">
              Beyond infrastructure, I have solid backend development experience with PHP and Laravel, 
              understand microservices architecture deeply, and focus on building reliable systems with clean, maintainable code.
            </p>

            <div className="pt-4">
              <button className="btn-primary group">
                Learn More About Me
              </button>
            </div>
          </div>

          {/* Right Side - Strengths */}
          <div className="grid sm:grid-cols-2 gap-4">
            {strengths.map((strength, idx) => {
              const Icon = strength.icon
              return (
                <div
                  key={idx}
                  className="card stagger-item group cursor-pointer"
                >
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-blue-600/20 group-hover:bg-blue-600/40 transition-colors duration-300">
                        <Icon className="h-6 w-6 text-blue-400" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-sm font-bold dark:text-white text-gray-900 mt-0">
                        {strength.title}
                      </h3>
                      <p className="text-xs dark:text-gray-400 text-gray-600 mt-1">
                        {strength.description}
                      </p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 md:grid-cols-6 gap-4 py-12 dark:border-gray-800 border-gray-300">
          {[
            { value: '3+', label: 'Years Exp.' },
            { value: '8+', label: 'Cloud Projects' },
            { value: '2', label: 'Cloud Platforms' },
            { value: '12+', label: 'Technologies' },
            { value: 'Certified', label: 'Terraform' },
            { value: 'Bolivia', label: 'Location' },
          ].map((stat, idx) => (
            <div key={idx} className="text-center p-4 rounded-lg dark:bg-gray-900/50 bg-gray-200/50 dark:hover:bg-gray-900/80 hover:bg-gray-300/50 transition-colors duration-300">
              <div className="text-2xl font-bold text-blue-500 mb-1">{stat.value}</div>
              <div className="text-xs dark:text-gray-400 text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
