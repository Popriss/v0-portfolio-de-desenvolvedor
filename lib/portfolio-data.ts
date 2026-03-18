export const portfolioData = {
  pt: {
    hero: {
      name: "Pedro Modesto",
      role: "Engenheiro de Computação / Full Stack & RPA Developer",
      location: "Sorocaba-SP, Brasil",
      greeting: "Olá, eu sou",
      cta: "Ver Projetos",
      ctaSecondary: "Contato",
    },
    nav: {
      about: "Sobre",
      experience: "Experiência",
      projects: "Projetos",
      skills: "Skills",
      learning: "Aprendizado",
      languages: "Idiomas",
      contact: "Contato",
    },
    about: {
      title: "Sobre mim",
      description:
        "Engenheiro de Computação em formação com sólida experiência prática em Automação de Processos (RPA), Engenharia de Dados e Operações de E-commerce. Foco no desenvolvimento de soluções Full Stack (Python) para integração de APIs de grandes marketplaces (Mercado Livre, Amazon) e otimização de fluxo de caixa. Experiente na criação de ecossistemas automatizados utilizando Cloud Computing (GCP/Cloudflare) e metodologias ágeis.",
      highlights: [
        "Automação de Processos (RPA)",
        "Engenharia de Dados",
        "Full Stack Python",
        "Cloud Computing",
      ],
    },
    experience: {
      title: "Experiência",
      items: [
        {
          company: "E-commerce CoutinhoShop",
          role: "Automações e Engenharia de Dados",
          period: "11/2025 - Atual",
          description:
            "Responsável pela estruturação do departamento de Automações e Engenharia de Dados. Desenvolvimento de aplicações em Python para orquestração de pedidos e priorização de tarefas via Trello. Criação de sistema de visualização de promoções (Mercado Livre) e ferramenta de upload simultâneo de imagens (Cloudflare R2) para múltiplas lojas. Implementação de dashboards baseados em PostgreSQL e GCP.",
          techs: ["Python", "PostgreSQL", "GCP", "Cloudflare R2", "Trello API"],
        },
        {
          company: "WI Engenharia",
          role: "Soluções Industriais",
          period: "03/2023 - 07/2025",
          description:
            "Planejamento e execução de inspeções técnicas. Desenvolvimento de soluções industriais personalizadas para otimização de serviços de campo.",
          techs: ["Automação Industrial", "Inspeções Técnicas", "Otimização"],
        },
      ],
    },
    projects: {
      title: "Projetos de Destaque",
      items: [
        {
          title: "SGI-SKU & Upload Amazon",
          description:
            "Sistema de gerenciamento de imagens e SKUs integrado com a AWS para operações de e-commerce em larga escala.",
          techs: ["Python", "AWS S3", "Amazon API", "PostgreSQL"],
        },
        {
          title: "Auxiliar de Pedidos & Precificação",
          description:
            "Automação de orquestração de pedidos e sistema de precificação dinâmica para e-commerce com múltiplas integrações.",
          techs: ["Python", "Mercado Livre API", "RPA", "PostgreSQL"],
        },
        {
          title: "Horta Inteligente e Renovável",
          description:
            "Sistema automatizado para cultivo de plantas utilizando Arduino, sensores de umidade e solenoides para irrigação inteligente.",
          techs: ["Arduino", "C++", "IoT", "Sensores"],
        },
        {
          title: "Site de Caronas Universitário",
          description:
            "Plataforma web para facilitar o compartilhamento de caronas entre estudantes universitários com sistema de matching.",
          techs: ["Python", "Angular", "PostgreSQL", "REST API"],
        },
      ],
    },
    skills: {
      title: "Skills & Tecnologias",
      categories: [
        {
          name: "Linguagens",
          items: [
            { name: "Python", icon: "python", color: "#3776AB" },
            { name: "JavaScript", icon: "javascript", color: "#F7DF1E" },
            { name: "Java", icon: "openjdk", color: "#ED8B00" },
            { name: "C++", icon: "cplusplus", color: "#00599C" },
            { name: "SQL", icon: "postgresql", color: "#4169E1" },
          ],
        },
        {
          name: "Cloud & Infra",
          items: [
            { name: "GCP", icon: "googlecloud", color: "#4285F4" },
            { name: "Cloudflare", icon: "cloudflare", color: "#F38020" },
            { name: "Docker", icon: "docker", color: "#2496ED" },
            { name: "PostgreSQL", icon: "postgresql", color: "#4169E1" },
          ],
        },
        {
          name: "Frameworks & Tools",
          items: [
            { name: "React", icon: "react", color: "#61DAFB" },
            { name: "Angular", icon: "angular", color: "#DD0031" },
            { name: "Git", icon: "git", color: "#F05032" },
            { name: "Trello", icon: "trello", color: "#0052CC" },
          ],
        },
        {
          name: "Especialidades",
          items: [
            { name: "Mercado Livre", icon: "mercadolibre", color: "#FFE600" },
            { name: "Amazon", icon: "amazon", color: "#FF9900" },
            { name: "Arduino", icon: "arduino", color: "#00979D" },
            { name: "UiPath", icon: "uipath", color: "#FA4616" },
          ],
        },
      ],
    },
    learning: {
      title: "Aprendizado",
      educationLabel: "Formação Acadêmica",
      certificatesLabel: "Certificações",
      profilesLabel: "Perfis de Aprendizado",
      education: [
        {
          degree: "Bacharelado em Engenharia da Computação",
          institution: "Centro Universitário Facens",
          period: "2022 — Nov 2026",
          status: "Cursando",
        },
      ],
      certificates: [
        { title: "Google Cloud Fundamentals: Core Infrastructure", issuer: "Google Cloud / Coursera", year: "2024", credential: "" },
        { title: "Python for Everybody", issuer: "University of Michigan / Coursera", year: "2023", credential: "" },
        { title: "Automação com RPA — UiPath Foundations", issuer: "UiPath Academy", year: "2023", credential: "" },
        { title: "Desenvolvimento em Python — POO e Projetos", issuer: "ETEC / Alura", year: "2022", credential: "" },
        { title: "Ciência de Dados com Python", issuer: "Alura", year: "2022", credential: "" },
        { title: "Design Thinking", issuer: "IDEO / Coursera", year: "2022", credential: "" },
      ],
      profiles: [
        { name: "GitHub", url: "https://github.com/pedromodesto" },
        { name: "LinkedIn Learning", url: "https://www.linkedin.com/in/pedro-modesto-0a3451250" },
        { name: "Google Cloud Skills", url: "https://www.cloudskillsboost.google" },
      ],
    },
    languages: {
      title: "Idiomas",
      levels: {
        grammar: "Gramática",
        reading: "Leitura",
        listening: "Compreensão",
        speaking: "Conversação",
      },
      items: [
        {
          language: "Português",
          flag: "🇧🇷",
          native: true,
          nativeLabel: "Nativo",
          skills: null,
        },
        {
          language: "Inglês",
          flag: "🇺🇸",
          native: false,
          nativeLabel: null,
          skills: {
            grammar: 70,
            reading: 85,
            listening: 80,
            speaking: 60,
          },
        },
      ],
    },
    contact: {
      title: "Vamos conversar?",
      description:
        "Estou sempre aberto a novas oportunidades e projetos interessantes. Entre em contato!",
      email: "pedromodesto1712@gmail.com",
      phone: "+55 15 99685-8060",
      emailLabel: "Email",
      linkedinLabel: "LinkedIn",
      whatsappLabel: "WhatsApp",
    },
    footer: {
      rights: "Todos os direitos reservados.",
      madeWith: "Feito com",
    },
  },
  en: {
    hero: {
      name: "Pedro Modesto",
      role: "Computer Engineer / Full Stack & RPA Developer",
      location: "Sorocaba-SP, Brazil",
      greeting: "Hello, I'm",
      cta: "View Projects",
      ctaSecondary: "Contact",
    },
    nav: {
      about: "About",
      experience: "Experience",
      projects: "Projects",
      skills: "Skills",
      learning: "Learning",
      languages: "Languages",
      contact: "Contact",
    },
    about: {
      title: "About me",
      description:
        "Computer Engineering student with solid hands-on experience in Process Automation (RPA), Data Engineering, and E-commerce Operations. Focused on developing Full Stack solutions (Python) for API integration with major marketplaces (Mercado Livre, Amazon) and cash flow optimization. Experienced in building automated ecosystems using Cloud Computing (GCP/Cloudflare) and agile methodologies.",
      highlights: [
        "Process Automation (RPA)",
        "Data Engineering",
        "Full Stack Python",
        "Cloud Computing",
      ],
    },
    experience: {
      title: "Experience",
      items: [
        {
          company: "E-commerce CoutinhoShop",
          role: "Automation & Data Engineering",
          period: "11/2025 - Present",
          description:
            "Responsible for structuring the Automation and Data Engineering department. Development of Python applications for order orchestration and task prioritization via Trello. Creation of promotion visualization system (Mercado Livre) and simultaneous image upload tool (Cloudflare R2) for multiple stores. Implementation of dashboards based on PostgreSQL and GCP.",
          techs: ["Python", "PostgreSQL", "GCP", "Cloudflare R2", "Trello API"],
        },
        {
          company: "WI Engenharia",
          role: "Industrial Solutions",
          period: "03/2023 - 07/2025",
          description:
            "Planning and execution of technical inspections. Development of customized industrial solutions for field service optimization.",
          techs: ["Industrial Automation", "Technical Inspections", "Optimization"],
        },
      ],
    },
    projects: {
      title: "Featured Projects",
      items: [
        {
          title: "SGI-SKU & Amazon Upload",
          description:
            "Image and SKU management system integrated with AWS for large-scale e-commerce operations.",
          techs: ["Python", "AWS S3", "Amazon API", "PostgreSQL"],
        },
        {
          title: "Order Assistant & Pricing",
          description:
            "Order orchestration automation and dynamic pricing system for e-commerce with multiple integrations.",
          techs: ["Python", "Mercado Livre API", "RPA", "PostgreSQL"],
        },
        {
          title: "Smart Renewable Garden",
          description:
            "Automated system for plant cultivation using Arduino, humidity sensors, and solenoids for smart irrigation.",
          techs: ["Arduino", "C++", "IoT", "Sensors"],
        },
        {
          title: "University Carpooling Platform",
          description:
            "Web platform to facilitate ride-sharing among university students with a matching system.",
          techs: ["Python", "Angular", "PostgreSQL", "REST API"],
        },
      ],
    },
    skills: {
      title: "Skills & Technologies",
      categories: [
        {
          name: "Languages",
          items: [
            { name: "Python", icon: "python", color: "#3776AB" },
            { name: "JavaScript", icon: "javascript", color: "#F7DF1E" },
            { name: "Java", icon: "openjdk", color: "#ED8B00" },
            { name: "C++", icon: "cplusplus", color: "#00599C" },
            { name: "SQL", icon: "postgresql", color: "#4169E1" },
          ],
        },
        {
          name: "Cloud & Infra",
          items: [
            { name: "GCP", icon: "googlecloud", color: "#4285F4" },
            { name: "Cloudflare", icon: "cloudflare", color: "#F38020" },
            { name: "Docker", icon: "docker", color: "#2496ED" },
            { name: "PostgreSQL", icon: "postgresql", color: "#4169E1" },
          ],
        },
        {
          name: "Frameworks & Tools",
          items: [
            { name: "React", icon: "react", color: "#61DAFB" },
            { name: "Angular", icon: "angular", color: "#DD0031" },
            { name: "Git", icon: "git", color: "#F05032" },
            { name: "Trello", icon: "trello", color: "#0052CC" },
          ],
        },
        {
          name: "Specialties",
          items: [
            { name: "Mercado Livre", icon: "mercadolibre", color: "#FFE600" },
            { name: "Amazon", icon: "amazon", color: "#FF9900" },
            { name: "Arduino", icon: "arduino", color: "#00979D" },
            { name: "UiPath", icon: "uipath", color: "#FA4616" },
          ],
        },
      ],
    },
    learning: {
      title: "Learning",
      educationLabel: "Academic Background",
      certificatesLabel: "Certifications",
      profilesLabel: "Learning Profiles",
      education: [
        {
          degree: "Bachelor's in Computer Engineering",
          institution: "Centro Universitário Facens",
          period: "2022 — Nov 2026",
          status: "In Progress",
        },
      ],
      certificates: [
        { title: "Google Cloud Fundamentals: Core Infrastructure", issuer: "Google Cloud / Coursera", year: "2024", credential: "" },
        { title: "Python for Everybody", issuer: "University of Michigan / Coursera", year: "2023", credential: "" },
        { title: "RPA Automation — UiPath Foundations", issuer: "UiPath Academy", year: "2023", credential: "" },
        { title: "Python Development — OOP & Projects", issuer: "ETEC / Alura", year: "2022", credential: "" },
        { title: "Data Science with Python", issuer: "Alura", year: "2022", credential: "" },
        { title: "Design Thinking", issuer: "IDEO / Coursera", year: "2022", credential: "" },
      ],
      profiles: [
        { name: "GitHub", url: "https://github.com/pedromodesto" },
        { name: "LinkedIn Learning", url: "https://www.linkedin.com/in/pedro-modesto-0a3451250" },
        { name: "Google Cloud Skills", url: "https://www.cloudskillsboost.google" },
      ],
    },
    languages: {
      title: "Languages",
      levels: {
        grammar: "Grammar",
        reading: "Reading",
        listening: "Listening",
        speaking: "Speaking",
      },
      items: [
        {
          language: "Portuguese",
          flag: "🇧🇷",
          native: true,
          nativeLabel: "Native",
          skills: null,
        },
        {
          language: "English",
          flag: "🇺🇸",
          native: false,
          nativeLabel: null,
          skills: {
            grammar: 70,
            reading: 85,
            listening: 80,
            speaking: 60,
          },
        },
      ],
    },
    contact: {
      title: "Let's talk?",
      description:
        "I'm always open to new opportunities and interesting projects. Get in touch!",
      email: "pedromodesto1712@gmail.com",
      phone: "+55 15 99685-8060",
      emailLabel: "Email",
      linkedinLabel: "LinkedIn",
      whatsappLabel: "WhatsApp",
    },
    footer: {
      rights: "All rights reserved.",
      madeWith: "Made with",
    },
  },
} as const;

export const socialLinks = {
  linkedin: "https://www.linkedin.com/in/pedro-modesto-0a3451250",
  email: "mailto:pedromodesto1712@gmail.com",
  github: "https://github.com/pedromodesto",
  whatsapp: "https://wa.me/5515996858060",
  phone: "tel:+5515996858060",
} as const;

export type Language = "pt" | "en";
export type PortfolioData = typeof portfolioData;
