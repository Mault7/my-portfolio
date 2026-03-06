import React from 'react'

export default function About({ language = 'en' }) {
  const content = {
    es: {
      title: 'About Me',
      introParagraphs: [
        'Mi camino en la tecnologia comenzo cuando decidi viajar a Buenos Aires para realizar una especializacion en sistemas embebidos. En ese momento tuve mi primer contacto profundo con la programacion a traves de microcontroladores y el desarrollo de firmware. Trabajar tan cerca del hardware, entender como funcionan los sistemas a bajo nivel y construir soluciones desde cero desperto en mi una gran curiosidad por la tecnologia y una fuerte motivacion por aprender y resolver problemas.',
        'A medida que fui desarrollando proyectos, esa curiosidad comenzo a llevarme mas alla del propio dispositivo. Empece a interesarme por como esos sistemas podian conectarse con otros, compartir informacion y formar parte de soluciones mas amplias. Fue entonces cuando descubri el potencial del paradigma del Internet de las Cosas.',
        'Esa inquietud por comprender el panorama completo me llevo a explorar el desarrollo de software mas alla del mundo embebido. Con el tiempo di mis primeros pasos en software comercial trabajando en outsourcing, donde pude experimentar como se construyen aplicaciones reales y como los equipos colaboran.',
        'Mientras avanzaba en ese camino, cada vez me interesaba mas entender lo que ocurria detras de las aplicaciones: como se construyen los entornos donde viven, como se despliegan los sistemas y como se mantienen funcionando de forma confiable. Fue ahi donde descubri el mundo de DevOps.',
        'DevOps represento para mi la convergencia de muchas cosas que siempre me interesaron: ingenieria de sistemas, automatizacion, infraestructura y la posibilidad de construir plataformas que permitan que el software evolucione y escale eficientemente. Hoy mi enfoque principal esta en este campo, especialmente en cloud.',
        'Mirando hacia atras, desde aquellos primeros proyectos con microcontroladores hasta mi interes actual en DevOps, un aspecto se ha mantenido constante: la curiosidad por entender como funcionan los sistemas y la motivacion por seguir aprendiendo y construyendo tecnologia cada vez mas significativa.',
      ],
    },
    en: {
      title: 'About Me',
      introParagraphs: [
        'My journey in technology started when I moved to Buenos Aires to pursue a specialization in embedded systems. That was my first deep exposure to programming through microcontrollers and firmware development. Working close to hardware and building solutions from scratch sparked a strong curiosity in me and a real motivation to keep learning and solving problems.',
        'As I built more projects, that curiosity pushed me beyond individual devices. I became interested in how systems connect, exchange data, and integrate into broader solutions. That is when I discovered the potential of the Internet of Things paradigm.',
        'That same desire to understand the full picture led me to explore software development beyond embedded systems. Over time, I took my first steps in commercial software in an outsourcing company, where I saw how real applications are built and how teams collaborate to deliver value.',
        'As I progressed, I became increasingly interested in what happens behind applications: how environments are built, how systems are deployed, and how reliability is maintained. That is where I discovered the DevOps world.',
        'DevOps represented the convergence of many things that have always interested me: systems engineering, automation, infrastructure, and building platforms that help software evolve and scale efficiently. Today, my main focus is in this field, especially in the cloud ecosystem.',
        'Looking back, from early microcontroller projects to my current focus on DevOps, one thing has remained constant: curiosity about how systems work and the motivation to keep learning and building increasingly meaningful technology.',
      ],
    },
  }

  const t = content[language] || content.en

  return (
    <section id="about" className="relative py-24 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h2 className="section-title">{t.title}</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full mx-auto mt-4"></div>
        </div>

        <div className="space-y-8">
          <article className="relative overflow-hidden rounded-2xl border border-blue-500/20 dark:bg-gradient-to-br dark:from-blue-600/10 dark:via-gray-900 dark:to-black bg-gradient-to-br from-blue-50 via-white to-blue-100 p-8 md:p-10">
            <div className="absolute -top-20 -right-20 h-52 w-52 rounded-full bg-blue-500/15 blur-3xl pointer-events-none"></div>
            <div className="space-y-5 relative z-10">
              {t.introParagraphs.map((paragraph, idx) => (
                <p key={idx} className="text-base md:text-lg leading-8 dark:text-gray-200 text-gray-700">
                  {paragraph}
                </p>
              ))}
            </div>
          </article>

        </div>
      </div>
    </section>
  )
}
