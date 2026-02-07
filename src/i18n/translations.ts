export const translations = {
  en: {
    // Nav
    "nav.about": "About",
    "nav.skills": "Skills",
    "nav.experience": "Experience",
    "nav.education": "Education",
    "nav.contact": "Contact",

    // Hero
    "hero.title": "Full-Stack Developer",
    "hero.description":
      "Passionate software engineer with 10+ years of experience building web, mobile, and cloud applications. Focused on delivering clean, scalable solutions.",
    "hero.contact": "Get in Touch",

    // About
    "about.heading": "About Me",
    "about.p1":
      "I'm a Computer Science graduate with over a decade of experience in software development. I've worked across the full stack — from designing responsive frontends to architecting robust backend systems and managing cloud infrastructure.",
    "about.p2":
      "Throughout my career, I've led development teams, driven architecture decisions, and delivered projects in healthcare, entertainment, fintech, and telecommunications. I'm passionate about clean code, automation, and leveraging AI to build smarter solutions.",

    // Skills
    "skills.heading": "Skills",
    "skills.frontend": "Frontend",
    "skills.backend": "Backend",
    "skills.mobile": "Mobile",
    "skills.devops": "DevOps",
    "skills.databases": "Databases",
    "skills.cloud": "Cloud & Services",
    "skills.ai": "AI & Tools",

    // Experience
    "experience.heading": "Experience",
    "experience.hitmusic.role": "Software Developer",
    "experience.hitmusic.company": "HitMusic21",
    "experience.hitmusic.period": "2025 — Present",
    "experience.hitmusic.desc":
      "Leading development of a music streaming platform. Implementing serverless backend with AWS Lambda and DynamoDB, alongside a React-based frontend.",

    "experience.cds.role": "Full-Stack Developer & Tech Lead",
    "experience.cds.company": "CDS",
    "experience.cds.period": "2017 — 2025",
    "experience.cds.desc":
      "Led cross-functional teams in delivering enterprise solutions for healthcare, telecommunications, and fintech clients. Key projects included a telemedicine platform (Node.js, React, PostgreSQL), mobile apps (React Native, Flutter), and microservices architectures on AWS.",

    "experience.cast.role": "Software Developer",
    "experience.cast.company": "Cast SRL",
    "experience.cast.period": "2014 — 2017",
    "experience.cast.desc":
      "Developed internal management systems and client-facing web applications using PHP, Laravel, jQuery, and MySQL. Maintained legacy systems and contributed to database optimization efforts.",

    // Education
    "education.heading": "Education",
    "education.degree": "B.Sc. in Computer Science",
    "education.school": "Universidad Nacional de Asunción (UNA)",
    "education.year": "2017",

    // Footer
    "footer.rights": "All rights reserved.",
    "footer.terms": "Terms & Conditions",
    "footer.privacy": "Privacy Policy",
  },
  es: {
    // Nav
    "nav.about": "Sobre mí",
    "nav.skills": "Habilidades",
    "nav.experience": "Experiencia",
    "nav.education": "Educación",
    "nav.contact": "Contacto",

    // Hero
    "hero.title": "Desarrollador Full-Stack",
    "hero.description":
      "Ingeniero de software apasionado con más de 10 años de experiencia construyendo aplicaciones web, móviles y en la nube. Enfocado en soluciones limpias y escalables.",
    "hero.contact": "Contactar",

    // About
    "about.heading": "Sobre Mí",
    "about.p1":
      "Soy Licenciado en Ciencias de la Computación con más de una década de experiencia en desarrollo de software. He trabajado en todo el stack — desde el diseño de frontends responsivos hasta la arquitectura de sistemas backend robustos y gestión de infraestructura en la nube.",
    "about.p2":
      "A lo largo de mi carrera, he liderado equipos de desarrollo, tomado decisiones de arquitectura y entregado proyectos en salud, entretenimiento, fintech y telecomunicaciones. Me apasiona el código limpio, la automatización y el uso de IA para construir soluciones más inteligentes.",

    // Skills
    "skills.heading": "Habilidades",
    "skills.frontend": "Frontend",
    "skills.backend": "Backend",
    "skills.mobile": "Móvil",
    "skills.devops": "DevOps",
    "skills.databases": "Bases de Datos",
    "skills.cloud": "Nube y Servicios",
    "skills.ai": "IA y Herramientas",

    // Experience
    "experience.heading": "Experiencia",
    "experience.hitmusic.role": "Desarrollador de Software",
    "experience.hitmusic.company": "HitMusic21",
    "experience.hitmusic.period": "2025 — Presente",
    "experience.hitmusic.desc":
      "Liderando el desarrollo de una plataforma de streaming musical. Implementando backend serverless con AWS Lambda y DynamoDB, junto con un frontend basado en React.",

    "experience.cds.role": "Desarrollador Full-Stack & Líder Técnico",
    "experience.cds.company": "CDS",
    "experience.cds.period": "2017 — 2025",
    "experience.cds.desc":
      "Lideré equipos multidisciplinarios entregando soluciones empresariales para clientes de salud, telecomunicaciones y fintech. Proyectos clave incluyeron una plataforma de telemedicina (Node.js, React, PostgreSQL), apps móviles (React Native, Flutter) y arquitecturas de microservicios en AWS.",

    "experience.cast.role": "Desarrollador de Software",
    "experience.cast.company": "Cast SRL",
    "experience.cast.period": "2014 — 2017",
    "experience.cast.desc":
      "Desarrollé sistemas de gestión internos y aplicaciones web para clientes usando PHP, Laravel, jQuery y MySQL. Mantuve sistemas legados y contribuí a la optimización de bases de datos.",

    // Education
    "education.heading": "Educación",
    "education.degree": "Lic. en Ciencias de la Computación",
    "education.school": "Universidad Nacional de Asunción (UNA)",
    "education.year": "2017",

    // Footer
    "footer.rights": "Todos los derechos reservados.",
    "footer.terms": "Términos y Condiciones",
    "footer.privacy": "Política de Privacidad",
  },
} as const;

export type Lang = keyof typeof translations;
export type TranslationKey = keyof (typeof translations)["en"];
