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
      body: "Sou desenvolvedor fullstack focado em criar produtos web modernos, rápidos e bem-acabados. Trabalho principalmente com React e Next.js e já coloquei no ar aplicações reais — de uma plataforma de análise de investimentos a um SaaS de biblioteca digital e um e-commerce. Levo a ideia da interface até o deploy, cuidando da experiência do usuário e da lógica por trás dela. Em busca da primeira oportunidade para crescer ao lado de um time e entregar produtos que as pessoas realmente usam.",
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
      body: "I'm a fullstack developer focused on building modern, fast and polished web products. I work mainly with React and Next.js and have already shipped real applications — from an investment-analysis platform to a digital-library SaaS and an e-commerce. I take ideas from the interface all the way to deploy, caring about both the user experience and the logic behind it. Looking for my first opportunity to grow alongside a team and deliver products people actually use.",
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
