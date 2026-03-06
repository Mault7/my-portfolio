import React from 'react'
import { GraduationCap, BadgeCheck } from 'lucide-react'

export default function Skills({ language = 'en' }) {
  const terraformBadgeImageUrl = import.meta.env.VITE_TERRAFORM_BADGE_IMAGE_URL || ''
  const terraformBadgeVerifyUrl = import.meta.env.VITE_TERRAFORM_BADGE_VERIFY_URL || ''

  const content = {
    es: {
      title: 'Skills y Expertise',
      certificationsTitle: 'Certificaciones',
      educationTitle: 'Educacion',
      statusEarned: 'Obtenida',
      statusProgress: 'En Progreso',
      education: [
        'Postgrado en Internet of Things (IoT) - UBA, Argentina',
        'Ingenieria en Sistemas Electronicos - EMI, Bolivia',
      ],
    },
    en: {
      title: 'Skills & Expertise',
      certificationsTitle: 'Certifications',
      educationTitle: 'Education',
      statusEarned: 'Earned',
      statusProgress: 'In Progress',
      education: [
        'Postgraduate in Internet of Things (IoT) - UBA, Argentina',
        "Bachelor's in Electronic Systems Engineering - EMI, Bolivia",
      ],
    },
  }

  const t = content[language] || content.en

  const technologies = [
    { name: 'AWS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg' },
    { name: 'GCP', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg' },
    { name: 'Kubernetes', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg' },
    { name: 'Docker', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' },
    { name: 'Terraform', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/terraform/terraform-original.svg' },
    { name: 'Ansible', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ansible/ansible-original.svg' },
    { name: 'Jenkins', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jenkins/jenkins-original.svg' },
    { name: 'PHP', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg' },
    { name: 'Laravel', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg' },
    { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
    { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
    { name: 'Linux', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg' },
    { name: 'Git', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
    { name: 'SQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
  ]

  const badges = [
    {
      title: 'Terraform Associate',
      provider: 'HashiCorp',
      status: t.statusEarned,
      imageUrl: terraformBadgeImageUrl,
      verifyUrl: terraformBadgeVerifyUrl,
      isEarned: true,
    },
    {
      title: 'Solutions Architect Associate',
      provider: 'Amazon Web Services',
      status: t.statusProgress,
      imageUrl: '',
      verifyUrl: '',
      isEarned: false,
    },
  ]
  const visibleBadges = badges.filter((badge) => badge.isEarned)

  return (
    <section id="skills" className="relative py-24 dark:bg-gray-900/30 bg-gray-100/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h2 className="section-title">{t.title}</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full mx-auto mt-4"></div>
        </div>

        <div className="flex flex-wrap justify-center gap-8 md:gap-10">
          {technologies.map((tech) => (
            <div key={tech.name} className="flex flex-col items-center gap-3 group">
              <div className="h-20 w-20 md:h-24 md:w-24 rounded-full bg-gradient-to-b from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900 border border-gray-300 dark:border-gray-700 shadow-lg shadow-blue-500/10 flex items-center justify-center transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-blue-500/30">
                <img src={tech.icon} alt={`${tech.name} logo`} className="h-10 w-10 md:h-12 md:w-12 object-contain" loading="lazy" />
              </div>
              <p className="text-xs md:text-sm font-medium dark:text-gray-300 text-gray-700 group-hover:text-blue-500 transition-colors duration-200">
                {tech.name}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 space-y-8">
          <div className="p-8 dark:bg-blue-600/10 bg-blue-500/5 border dark:border-blue-500/30 border-blue-400/30 rounded-lg">
            <div className="flex items-center gap-3 mb-2">
              <BadgeCheck className="w-5 h-5 text-blue-500" />
              <h3 className="text-xl font-bold dark:text-blue-400 text-blue-600">{t.certificationsTitle}</h3>
            </div>
            <div className="badge-marquee mt-5" style={{ '--badge-count': Math.max(visibleBadges.length, 1) }}>
              {visibleBadges.map((badge, index) => {
                const itemClasses = `badge-marquee-item flex flex-col items-center justify-center ${badge.verifyUrl ? 'cursor-pointer' : ''}`
                const itemStyle = { '--badge-index': index }
                const body = (
                  <>
                    <div className="mb-3">
                      {badge.imageUrl ? (
                        <img src={badge.imageUrl} alt={`${badge.title} badge`} className="w-32 h-32 object-contain" loading="lazy" />
                      ) : (
                        <div className="w-32 h-32 rounded-full border border-blue-500/40 flex items-center justify-center">
                          <BadgeCheck className="w-12 h-12 text-blue-500" />
                        </div>
                      )}
                    </div>
                    {!badge.isEarned ? (
                      <span className="inline-flex px-2 py-1 text-xs font-medium rounded-full border bg-amber-500/15 text-amber-400 border-amber-500/40">
                        {badge.status}
                      </span>
                    ) : null}
                  </>
                )

                if (badge.verifyUrl) {
                  return (
                    <a
                      key={`${badge.title}-${badge.provider}`}
                      href={badge.verifyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={itemClasses}
                      style={itemStyle}
                      aria-label={`${badge.title} ${t.statusEarned}`}
                    >
                      {body}
                    </a>
                  )
                }

                return (
                  <div
                    key={`${badge.title}-${badge.provider}`}
                    className={itemClasses}
                    style={itemStyle}
                    aria-label={`${badge.title} ${t.statusProgress}`}
                  >
                    {body}
                  </div>
                )
              })}
            </div>
          </div>

          <div className="p-8 dark:bg-blue-600/10 bg-blue-500/5 border dark:border-blue-500/30 border-blue-400/30 rounded-lg">
            <div className="flex items-center gap-3 mb-4">
              <GraduationCap className="w-5 h-5 text-blue-500" />
              <h3 className="text-xl font-bold dark:text-blue-400 text-blue-600">{t.educationTitle}</h3>
            </div>
            <ul className="space-y-3 dark:text-gray-300 text-gray-700">
              {t.education.map((item) => (
                <li key={item} className="flex items-center">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
