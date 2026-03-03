import React from 'react'

export default function Skills() {
  const skillCategories = [
    {
      category: 'Cloud & Infrastructure',
      skills: ['AWS (compute, networking, IAM, deployments)', 'Google Cloud Platform (GCP)', 'Kubernetes', 'Docker & Containerization', 'Linux Server Administration'],
    },
    {
      category: 'Infrastructure as Code',
      skills: ['Terraform (Certified Associate 004)', 'Ansible', 'Configuration Management', 'Infrastructure Automation', 'Environment Standardization'],
    },
    {
      category: 'CI/CD & DevOps',
      skills: ['Bitbucket Pipelines', 'Jenkins', 'Git-based Workflows', 'Automated Deployments', 'Production Support'],
    },
    {
      category: 'Backend Development',
      skills: ['PHP (Vanilla & Laravel)', 'JavaScript/Node.js', 'REST APIs', 'Laravel Framework', 'Microservices Architecture'],
    },
    {
      category: 'Databases & Persistence',
      skills: ['SQL Databases', 'Database Administration', 'Data Persistence', 'Query Optimization', 'Schema Design'],
    },
    {
      category: 'Web Servers & Tools',
      skills: ['Nginx', 'Apache', 'Git Version Control', 'Linux CLI', 'Docker Compose'],
    },
  ]

  return (
    <section id="skills" className="relative py-24 dark:bg-gray-900/30 bg-gray-100/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="mb-16 text-center">
          <h2 className="section-title">Skills & Expertise</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full mx-auto mt-4"></div>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, idx) => (
            <div
              key={idx}
              className="card stagger-item"
            >
              <h3 className="text-lg font-bold text-blue-400 mb-4">
                {category.category}
              </h3>
              <div className="space-y-3">
                {category.skills.map((skill, skillIdx) => (
                  <div key={skillIdx} className="group">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium dark:text-gray-300 text-gray-700 dark:group-hover:text-white group-hover:text-gray-900 transition-colors duration-200">
                        {skill}
                      </span>
                      <span className="text-xs text-blue-400">90%</span>
                    </div>
                    <div className="w-full h-2 dark:bg-gray-800 bg-gray-300 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-blue-500 to-blue-600 rounded-full transition-all duration-700 group-hover:shadow-lg group-hover:shadow-blue-500/50"
                        style={{
                          width: `${85 + Math.random() * 15}%`,
                          animation: 'slideRight 1s ease-out',
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-16 p-8 dark:bg-blue-600/10 bg-blue-500/5 border dark:border-blue-500/30 border-blue-400/30 rounded-lg">
          <h3 className="text-xl font-bold dark:text-blue-400 text-blue-600 mb-4">Certifications & Education</h3>
          <ul className="grid md:grid-cols-2 gap-4 dark:text-gray-300 text-gray-700">
            <li className="flex items-center">
              <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
              HashiCorp Certified: Terraform Associate 004
            </li>
            <li className="flex items-center">
              <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
              Postgraduate in Internet of Things (IoT) - UBA, Argentina
            </li>
            <li className="flex items-center">
              <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
              Bachelor's in Electronic Systems Engineering - EMI, Bolivia
            </li>
            <li className="flex items-center">
              <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
              Languages: Spanish (Native) • English (Intermediate B1)
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}
