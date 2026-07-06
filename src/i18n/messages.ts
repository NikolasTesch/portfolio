export type Locale = "pt" | "en";

export const messages = {
  pt: {
    nav: {
      home: "Início",
      about: "Sobre",
      skills: "Skills",
      projects: "Projetos",
      contact: "Contato",
      cta: "Vamos conversar",
      openMenu: "Abrir menu",
      closeMenu: "Fechar menu",
    },
    hero: {
      role: "Desenvolvedor Fullstack",
      headlinePre: "Eu transformo ideias em ",
      headlineEm: "produtos web",
      headlinePost: " reais",
      intro:
        "Crio aplicações web modernas, rápidas e bem-acabadas com React e Next.js — do design ao deploy.",
      ctaWork: "Ver projetos",
      ctaCv: "Baixar CV",
      experience: "anos de experiência",
    },
    about: {
      tag: "Sobre mim",
      title: "Quem é o Nikolas",
      body: "Sou desenvolvedor Full-Stack em formação intensiva na Alpha EdTech e cursando Análise e Desenvolvimento de Sistemas. Especializado em construir aplicações web e mobile robustas com React, Next.js, Node.js e TypeScript, uno lógica estruturada a uma visão apurada de UX/UI. Crio projetos completos de ponta a ponta — do design ao deploy —, implementando fluxos de autenticação, testes automatizados (Jest/Playwright) e integração de armazenamento em nuvem. Busco contribuir com meu perfil autodidata e focado em boas práticas de engenharia para entregar soluções de alto impacto que resolvam problemas reais.",
      labelName: "Nome",
      labelEmail: "E-mail",
      labelLocation: "Localização",
      labelAvailability: "Disponibilidade",
      location: "Espírito Santo, Brasil",
      availability: "Disponível para trabalho",
      downloadCv: "Baixar CV",
    },
    skills: {
      tag: "Minhas skills",
      title: "Tecnologias que utilizo",
    },
    projects: {
      tag: "Portfólio",
      title: "Projetos em destaque",
      demo: "Ver demo",
      repo: "Código",
      featured: "Destaque",
    },
    contact: {
      tag: "Contato",
      title: "Vamos trabalhar juntos",
      subtitle:
        "Tem um projeto em mente ou uma vaga aberta? Me mande uma mensagem.",
      name: "Seu nome",
      email: "Seu e-mail",
      subject: "Assunto",
      message: "Sua mensagem",
      send: "Enviar mensagem",
    },
    footer: {
      rights: "Todos os direitos reservados.",
      built: "Feito com Next.js, Tailwind e Framer Motion.",
    },
  },
  en: {
    nav: {
      home: "Home",
      about: "About",
      skills: "Skills",
      projects: "Projects",
      contact: "Contact",
      cta: "Let's talk",
      openMenu: "Open menu",
      closeMenu: "Close menu",
    },
    hero: {
      role: "Fullstack Developer",
      headlinePre: "I turn ideas into ",
      headlineEm: "real web",
      headlinePost: " products",
      intro:
        "I build modern, fast and polished web applications with React and Next.js — from design to deploy.",
      ctaWork: "View projects",
      ctaCv: "Download CV",
      experience: "years of experience",
    },
    about: {
      tag: "About me",
      title: "Who is Nikolas",
      body: "I am a Full-Stack Developer undergoing full-time intensive training at Alpha EdTech and pursuing an Associate Degree in Systems Analysis and Development. Specialized in building robust web and mobile applications with React, Next.js, Node.js, and TypeScript, I combine strong backend logic with a polished vision of UI/UX. I build complete end-to-end projects — from design to deployment —, implementing authentication flows, automated testing (Jest/Playwright), and cloud storage integration. I am looking to leverage my self-taught mindset and focus on software engineering best practices to deliver high-impact solutions that solve real-world problems.",
      labelName: "Name",
      labelEmail: "Email",
      labelLocation: "Location",
      labelAvailability: "Availability",
      location: "Espírito Santo, Brazil",
      availability: "Available for work",
      downloadCv: "Download CV",
    },
    skills: {
      tag: "My skills",
      title: "Technologies I work with",
    },
    projects: {
      tag: "Portfolio",
      title: "Featured projects",
      demo: "View demo",
      repo: "Code",
      featured: "Featured",
    },
    contact: {
      tag: "Contact",
      title: "Let's work together",
      subtitle: "Have a project in mind or an open role? Send me a message.",
      name: "Your name",
      email: "Your email",
      subject: "Subject",
      message: "Your message",
      send: "Send message",
    },
    footer: {
      rights: "All rights reserved.",
      built: "Built with Next.js, Tailwind and Framer Motion.",
    },
  },
};

export type Messages = (typeof messages)["pt"];
