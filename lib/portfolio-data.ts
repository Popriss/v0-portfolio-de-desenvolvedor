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
        "Engenheiro de Computação em formação com sólida experiência prática em Automação de Processos (RPA), Estruturação de Dados e Operações de E-commerce. Foco no desenvolvimento de soluções Full Stack (Python) para integração de APIs de grandes marketplaces (Mercado Livre, Amazon) e otimização de fluxo de caixa. Experiente na criação de ecossistemas automatizados utilizando Cloud Computing (GCP/Cloudflare) e metodologias ágeis.",
      highlights: [
        "Automação de Processos (RPA)",
        "Estruturação de Dados",
        "Full Stack Python",
        "Cloud Computing",
      ],
    },
    experience: {
      title: "Experiência",
      items: [
        {
          company: "E-commerce CoutinhoShop",
          role: "Automações e Estruturação de Dados",
          period: "11/2025 - Atual",
          description:
            "Responsável pela estruturação do departamento de Automações e Estruturação de Dados. Desenvolvimento de aplicações em Python para orquestração de pedidos e priorização de tarefas via Trello. Criação de sistema de visualização de promoções (Mercado Livre) e ferramenta de upload simultâneo de imagens (Cloudflare R2) para múltiplas lojas. Implementação de dashboards baseados em PostgreSQL e GCP.",
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
      showMore: "Ver mais projetos",
      showLess: "Ver menos",
      labelColors: {
        "E-commerce": "bg-blue-500/15 text-blue-400 border-blue-500/30",
        "Automação": "bg-violet-500/15 text-violet-400 border-violet-500/30",
        "IoT": "bg-emerald-500/15 text-emerald-400 border-emerald-500/30",
        "Web": "bg-amber-500/15 text-amber-400 border-amber-500/30",
        "Dados": "bg-cyan-500/15 text-cyan-400 border-cyan-500/30",
        "RPA": "bg-rose-500/15 text-rose-400 border-rose-500/30",
      },
      items: [
        {
          label: "E-commerce",
          title: "SGI-SKU & Upload Amazon",
          description: "Sistema de gerenciamento de imagens e SKUs integrado com a AWS para operações de e-commerce em larga escala.",
          objective: "Centralizar o gerenciamento de imagens e SKUs de produtos, eliminando processos manuais e reduzindo erros de cadastro na Amazon.",
          impact: "Redução de ~80% no tempo de upload de imagens e padronização completa do catálogo de produtos.",
          techs: ["Python", "AWS S3", "Amazon API", "PostgreSQL"],
        },
        {
          label: "Automação",
          title: "Auxiliar de Pedidos & Precificação",
          description: "Automação de orquestração de pedidos e sistema de precificação dinâmica para e-commerce com múltiplas integrações.",
          objective: "Automatizar a triagem, priorização e atualização de pedidos no Mercado Livre, além de ajustar preços dinamicamente com base em regras de negócio.",
          impact: "Processamento de centenas de pedidos diários sem intervenção manual e aumento da margem por precificação inteligente.",
          techs: ["Python", "Mercado Livre API", "RPA", "PostgreSQL"],
        },
        {
          label: "IoT",
          title: "Horta Inteligente e Renovável",
          description: "Sistema automatizado para cultivo de plantas utilizando Arduino, sensores de umidade e solenoides para irrigação inteligente.",
          objective: "Desenvolver um sistema embarcado de baixo custo que monitore e irrigue automaticamente uma horta doméstica com energia renovável.",
          impact: "Redução de 70% no consumo de água em comparação com irrigação manual e operação 100% autônoma.",
          techs: ["Arduino", "C++", "IoT", "Sensores"],
        },
        {
          label: "Web",
          title: "Site de Caronas Universitário",
          description: "Plataforma web para facilitar o compartilhamento de caronas entre estudantes universitários com sistema de matching.",
          objective: "Criar uma solução acessível para conectar motoristas e passageiros dentro do campus, reduzindo custos de transporte.",
          impact: "Plataforma funcional com sistema de matching por rota e horário, facilitando o transporte compartilhado entre estudantes.",
          techs: ["Python", "Angular", "PostgreSQL", "REST API"],
        },
        {
          label: "Dados",
          title: "Dashboard de Promoções ML",
          description: "Sistema de visualização em tempo real de promoções ativas no Mercado Livre para múltiplas lojas simultaneamente.",
          objective: "Oferecer uma visão unificada e em tempo real de todas as campanhas promocionais ativas, facilitando decisões comerciais rápidas.",
          impact: "Visibilidade total das promoções em um único painel, eliminando a necessidade de acessar cada loja individualmente.",
          techs: ["Python", "Mercado Livre API", "GCP", "PostgreSQL"],
        },
        {
          label: "Automação",
          title: "Upload Simultâneo Cloudflare R2",
          description: "Ferramenta para upload em massa e simultâneo de imagens para múltiplas lojas via Cloudflare R2.",
          objective: "Acelerar o processo de atualização de imagens de produtos em diversas lojas de uma só vez, eliminando uploads manuais repetitivos.",
          impact: "Upload de centenas de imagens em minutos com controle de versão e rastreabilidade completa.",
          techs: ["Python", "Cloudflare R2", "API REST", "Multi-threading"],
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
            { name: "Mercado Livre", icon: "", color: "#FFE600" },
            { name: "Amazon", icon: "", color: "#FF9900" },
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
          period: "2022 — Dez 2026",
          status: "Cursando",
        },
      ],
      certificates: [
        { title: "", issuer: "", year: "", credential: "" },
      ],
      profiles: [
        { name: "GitHub", url: "https://github.com/Popriss" },
        { name: "LinkedIn Learning", url: "https://www.linkedin.com/in/pedro-modesto-0a3451250" },
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
        "Computer Engineering student with solid hands-on experience in Process Automation (RPA), Data Structuring, and E-commerce Operations. Focused on developing Full Stack solutions (Python) for API integration with major marketplaces (Mercado Livre, Amazon) and cash flow optimization. Experienced in building automated ecosystems using Cloud Computing (GCP/Cloudflare) and agile methodologies.",
      highlights: [
        "Process Automation (RPA)",
        "Data Structuring",
        "Full Stack Python",
        "Cloud Computing",
      ],
    },
    experience: {
      title: "Experience",
      items: [
        {
          company: "E-commerce CoutinhoShop",
          role: "Automation & Data Structuring",
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
      showMore: "View more projects",
      showLess: "Show less",
      labelColors: {
        "E-commerce": "bg-blue-500/15 text-blue-400 border-blue-500/30",
        "Automation": "bg-violet-500/15 text-violet-400 border-violet-500/30",
        "IoT": "bg-emerald-500/15 text-emerald-400 border-emerald-500/30",
        "Web": "bg-amber-500/15 text-amber-400 border-amber-500/30",
        "Data": "bg-cyan-500/15 text-cyan-400 border-cyan-500/30",
        "RPA": "bg-rose-500/15 text-rose-400 border-rose-500/30",
      },
      items: [
        {
          label: "E-commerce",
          title: "SGI-SKU & Amazon Upload",
          description: "Image and SKU management system integrated with AWS for large-scale e-commerce operations.",
          objective: "Centralize product image and SKU management, eliminating manual processes and reducing catalog errors on Amazon.",
          impact: "~80% reduction in image upload time and complete standardization of the product catalog.",
          techs: ["Python", "AWS S3", "Amazon API", "PostgreSQL"],
        },
        {
          label: "Automation",
          title: "Order Assistant & Pricing",
          description: "Order orchestration automation and dynamic pricing system for e-commerce with multiple integrations.",
          objective: "Automate the triage, prioritization, and update of orders on Mercado Livre, while dynamically adjusting prices based on business rules.",
          impact: "Processing of hundreds of daily orders without manual intervention and increased margin through smart pricing.",
          techs: ["Python", "Mercado Livre API", "RPA", "PostgreSQL"],
        },
        {
          label: "IoT",
          title: "Smart Renewable Garden",
          description: "Automated system for plant cultivation using Arduino, humidity sensors, and solenoids for smart irrigation.",
          objective: "Develop a low-cost embedded system that automatically monitors and irrigates a home garden using renewable energy.",
          impact: "70% reduction in water consumption compared to manual irrigation and 100% autonomous operation.",
          techs: ["Arduino", "C++", "IoT", "Sensors"],
        },
        {
          label: "Web",
          title: "University Carpooling Platform",
          description: "Web platform to facilitate ride-sharing among university students with a matching system.",
          objective: "Create an accessible solution to connect drivers and passengers within campus, reducing transportation costs.",
          impact: "Functional platform with route and schedule matching system, facilitating shared transport among students.",
          techs: ["Python", "Angular", "PostgreSQL", "REST API"],
        },
        {
          label: "Data",
          title: "ML Promotions Dashboard",
          description: "Real-time visualization system for active promotions on Mercado Livre for multiple stores simultaneously.",
          objective: "Provide a unified, real-time view of all active promotional campaigns, enabling fast commercial decisions.",
          impact: "Full visibility of promotions in a single panel, eliminating the need to access each store individually.",
          techs: ["Python", "Mercado Livre API", "GCP", "PostgreSQL"],
        },
        {
          label: "Automation",
          title: "Cloudflare R2 Bulk Upload",
          description: "Tool for simultaneous bulk image uploads to multiple stores via Cloudflare R2.",
          objective: "Speed up the product image update process across multiple stores at once, eliminating repetitive manual uploads.",
          impact: "Upload of hundreds of images in minutes with version control and full traceability.",
          techs: ["Python", "Cloudflare R2", "REST API", "Multi-threading"],
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
          period: "2022 — Dec 2026",
          status: "In Progress",
        },
      ],
      certificates: [
        { title: "", issuer: "", year: "", credential: "" },
      ],
      profiles: [
        { name: "GitHub", url: "https://github.com/Popriss" },
        { name: "LinkedIn Learning", url: "https://www.linkedin.com/in/pedro-modesto-0a3451250" },
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
  github: "https://github.com/Popriss",
  whatsapp: "https://wa.me/5515996858060",
  phone: "tel:+5515996858060",
} as const;

export type Language = "pt" | "en";
export type PortfolioData = typeof portfolioData;
