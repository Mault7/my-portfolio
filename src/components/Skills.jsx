import React from 'react'
import { Award, GraduationCap, BadgeCheck, ExternalLink } from 'lucide-react'

export default function Skills() {
  const terraformBadgeImageUrl = import.meta.env.VITE_TERRAFORM_BADGE_IMAGE_URL || ''
  const terraformBadgeVerifyUrl = import.meta.env.VITE_TERRAFORM_BADGE_VERIFY_URL || ''

  const getSkillLevel = (skill) => {
    const seed = skill.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0)
    return 80 + (seed % 21)
  }

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

  const certifications = [
    'HashiCorp Certified: Terraform Associate 004',
    'AWS Certified Solutions Architect - Associate (SAA-C03) - In Progress',
  ]

  const education = [
    'Postgraduate in Internet of Things (IoT) - UBA, Argentina',
    "Bachelor's in Electronic Systems Engineering - EMI, Bolivia",
  ]

  const badges = [
    {
      title: 'Terraform Associate',
      provider: 'HashiCorp',
      status: 'Earned',
      imageUrl: terraformBadgeImageUrl,
      verifyUrl: terraformBadgeVerifyUrl,
    },
    {
      title: 'Solutions Architect Associate',
      provider: 'Amazon Web Services',
      status: 'In Progress',
      imageUrl: '',
      verifyUrl: '',
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
                {category.skills.map((skill, skillIdx) => {
                  const level = getSkillLevel(skill)

                  return (
                    <div key={skillIdx} className="group">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-medium dark:text-gray-300 text-gray-700 dark:group-hover:text-white group-hover:text-gray-900 transition-colors duration-200">
                          {skill}
                        </span>
                        <span className="text-xs text-blue-400">{level}%</span>
                      </div>
                      <div className="w-full h-2 dark:bg-gray-800 bg-gray-300 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-blue-500 to-blue-600 rounded-full transition-all duration-700 group-hover:shadow-lg group-hover:shadow-blue-500/50"
                          style={{
                            width: `${level}%`,
                          }}
                        ></div>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Credentials */}
        <div className="mt-8 grid md:grid-cols-2 gap-8">
          <div className="p-8 dark:bg-blue-600/10 bg-blue-500/5 border dark:border-blue-500/30 border-blue-400/30 rounded-lg">
            <div className="flex items-center gap-3 mb-4">
              <Award className="w-5 h-5 text-blue-500" />
              <h3 className="text-xl font-bold dark:text-blue-400 text-blue-600">Certifications</h3>
            </div>
            <ul className="space-y-3 dark:text-gray-300 text-gray-700">
              {certifications.map((item) => (
                <li key={item} className="flex items-center">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="p-8 dark:bg-blue-600/10 bg-blue-500/5 border dark:border-blue-500/30 border-blue-400/30 rounded-lg">
            <div className="flex items-center gap-3 mb-4">
              <GraduationCap className="w-5 h-5 text-blue-500" />
              <h3 className="text-xl font-bold dark:text-blue-400 text-blue-600">Education</h3>
            </div>
            <ul className="space-y-3 dark:text-gray-300 text-gray-700">
              {education.map((item) => (
                <li key={item} className="flex items-center">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-8 p-8 dark:bg-blue-600/10 bg-blue-500/5 border dark:border-blue-500/30 border-blue-400/30 rounded-lg">
          <div className="flex items-center gap-3 mb-2">
            <BadgeCheck className="w-5 h-5 text-blue-500" />
            <h3 className="text-xl font-bold dark:text-blue-400 text-blue-600">Professional Badges</h3>
          </div>
          <p className="text-sm dark:text-gray-400 text-gray-700 mb-6">
            This section is ready for Terraform and any future badges you earn.
          </p>

          <div className="badge-carousel">
            <div className="badge-track">
              {[...badges, ...badges].map((badge, idx) => (
                <div key={`${badge.title}-${badge.provider}-${idx}`} className="card badge-carousel-item">
                  <div className="mb-4">
                    {badge.imageUrl ? (
                      <img
                        src={badge.imageUrl}
                        alt={`${badge.title} badge`}
                        className="w-28 h-28 object-contain"
                        loading="lazy"
                      />
                    ) : (
                      <div className="w-28 h-28 rounded-lg bg-blue-600/10 border border-blue-500/30 flex items-center justify-center">
                        <BadgeCheck className="w-12 h-12 text-blue-500" />
                      </div>
                    )}
                  </div>
                  <p className="text-sm font-semibold dark:text-white text-gray-900">{badge.title}</p>
                  <p className="text-xs dark:text-gray-400 text-gray-600 mt-1">{badge.provider}</p>
                  <span className={`inline-flex mt-3 px-2 py-1 text-xs font-medium rounded-full border ${
                    badge.status === 'Earned'
                      ? 'bg-blue-600/20 text-blue-400 border-blue-500/30'
                      : 'bg-amber-500/15 text-amber-400 border-amber-500/40'
                  }`}>
                    {badge.status}
                  </span>
                  {badge.verifyUrl ? (
                    <a
                      href={badge.verifyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-4 inline-flex items-center gap-2 text-sm text-blue-500 hover:text-blue-400 transition-colors"
                    >
                      Verify badge
                      <ExternalLink size={14} />
                    </a>
                  ) : (
                    <p className="mt-4 text-xs dark:text-gray-500 text-gray-600">Verification link available on request.</p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
