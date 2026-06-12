export type Lang = 'es' | 'en';

export interface ExperienceItem {
  role: string;
  company: string;
  period: string;
  description: string;
  tags: string[];
}

export interface ProjectItem {
  name: string;
  description: string;
  tags: string[];
}

export interface Content {
  meta: { title: string };
  nav: {
    about: string;
    experience: string;
    projects: string;
    stack: string;
    contact: string;
    openMenu: string;
    closeMenu: string;
    toggleLang: string;
  };
  hero: {
    name: string;
    title: string;
    tagline: string;
    ctaPrimary: string;
    ctaSecondary: string;
  };
  about: {
    heading: string;
    paragraphs: string[];
    facts: { label: string; value: string }[];
  };
  experience: { heading: string; items: ExperienceItem[] };
  projects: { heading: string; items: ProjectItem[] };
  stack: { heading: string; note: string };
  contact: {
    availability: string;
    heading: string;
    body: string;
    emailLabel: string;
    form: {
      title: string;
      helper: string;
      label: string;
      placeholder: string;
      button: string;
      sending: string;
      success: string;
      error: string;
      invalid: string;
      notConfigured: string;
    };
  };
  footer: { rights: string };
}

export const content: Record<Lang, Content> = {
  es: {
    meta: { title: 'Rodolfo Acuña | Agentes de IA y Automatización' },
    nav: {
      about: 'Sobre mí',
      experience: 'Experiencia',
      projects: 'Proyectos',
      stack: 'Stack',
      contact: 'Contacto',
      openMenu: 'Abrir menú',
      closeMenu: 'Cerrar menú',
      toggleLang: 'Switch to English',
    },
    hero: {
      name: 'Rodolfo David Acuña López',
      title: 'Desarrollador de Agentes de IA & Automatización',
      tagline: 'Construyo agentes de IA que trabajan en producción, no solo en demos.',
      ctaPrimary: 'Hablemos',
      ctaSecondary: 'Ver proyectos',
    },
    about: {
      heading: 'Sobre mí',
      paragraphs: [
        'Soy estudiante de último año de Ingeniería en Computación en el TEC (Cartago, Costa Rica) y desarrollador full-stack con Python, JavaScript, TypeScript, React y Node.js.',
        'Mi enfoque es práctico: resolver problemas reales de negocio, desde el diseño hasta la producción, validando cada solución con los stakeholders que la usan todos los días.',
      ],
      facts: [
        { label: 'Ubicación', value: 'Cartago, Costa Rica' },
        { label: 'Formación', value: 'Ing. en Computación, TEC' },
        { label: 'Actualmente', value: 'Soporte de TI en Masesa' },
      ],
    },
    experience: {
      heading: 'Experiencia',
      items: [
        {
          role: 'Desarrollador de Agente de IA, Práctica Profesional',
          company: 'Masesa',
          period: 'Feb 2026 - May 2026',
          description:
            'Diseñé e implementé de extremo a extremo un agente de ventas con IA que procesa órdenes de venta reales en producción. El catálogo completo vive como embeddings vectoriales para búsqueda semántica y creación automática de órdenes por lenguaje natural.',
          tags: ['Odoo v18', 'n8n', 'Supabase', 'OpenAI'],
        },
        {
          role: 'Técnico de Soporte de TI',
          company: 'Masesa',
          period: 'Ago 2025 - actualidad',
          description:
            'Administración autónoma del ERP Odoo v18 para unos 35 usuarios, con más de 15 módulos personalizados y ajustes avanzados en Odoo Studio.',
          tags: ['Odoo v18', 'Odoo Studio', 'ERP'],
        },
      ],
    },
    projects: {
      heading: 'Proyectos',
      items: [
        {
          name: 'Trackify',
          description:
            'Plataforma de gestión municipal con una necesidad validada por representantes de la Contraloría General de la República de Costa Rica. Presentada en Morpho Studio, el hackathon de Stellar en Costa Rica.',
          tags: ['Gestión municipal', 'Stellar', 'Morpho Studio'],
        },
        {
          name: 'Open source en Web3',
          description:
            'Mejoras en smart contracts con Solidity y Soroban, revisadas y aprobadas por mantenedores de la comunidad.',
          tags: ['Solidity', 'Soroban', 'Web3'],
        },
      ],
    },
    stack: {
      heading: 'Stack técnico',
      note: 'Las herramientas con las que construyo y llevo productos a producción.',
    },
    contact: {
      availability: 'Disponible para nuevas oportunidades',
      heading: 'Hablemos',
      body: 'Si buscas a alguien que lleve agentes de IA del prototipo a producción, escríbeme.',
      emailLabel: 'Correo',
      form: {
        title: 'Guías y recursos de IA',
        helper: 'Déjame tu correo y te envío guías y recursos sobre IA y automatización. Sin spam.',
        label: 'Tu correo',
        placeholder: 'nombre@correo.com',
        button: 'Suscribirme',
        sending: 'Enviando...',
        success: '¡Listo! Gracias por suscribirte.',
        error: 'No se pudo enviar. Inténtalo de nuevo.',
        invalid: 'Escribe un correo válido.',
        notConfigured: 'El formulario estará disponible pronto. Mientras tanto, escríbeme por correo.',
      },
    },
    footer: { rights: '© 2026 Rodolfo David Acuña López. Hecho en Costa Rica.' },
  },
  en: {
    meta: { title: 'Rodolfo Acuña | AI Agents & Automation' },
    nav: {
      about: 'About',
      experience: 'Experience',
      projects: 'Projects',
      stack: 'Stack',
      contact: 'Contact',
      openMenu: 'Open menu',
      closeMenu: 'Close menu',
      toggleLang: 'Cambiar a español',
    },
    hero: {
      name: 'Rodolfo David Acuña López',
      title: 'AI Agent & Automation Developer',
      tagline: 'I build AI agents that work in production, not just in demos.',
      ctaPrimary: "Let's talk",
      ctaSecondary: 'View projects',
    },
    about: {
      heading: 'About me',
      paragraphs: [
        "I'm a final-year Computer Engineering student at TEC (Cartago, Costa Rica) and a full-stack developer working with Python, JavaScript, TypeScript, React and Node.js.",
        'My approach is practical: solving real business problems from design to production, validating every solution with the stakeholders who use it every day.',
      ],
      facts: [
        { label: 'Location', value: 'Cartago, Costa Rica' },
        { label: 'Education', value: 'Computer Engineering, TEC' },
        { label: 'Currently', value: 'IT Support at Masesa' },
      ],
    },
    experience: {
      heading: 'Experience',
      items: [
        {
          role: 'AI Agent Developer, Professional Internship',
          company: 'Masesa',
          period: 'Feb 2026 - May 2026',
          description:
            'Designed and implemented an end-to-end AI sales agent that processes real sales orders in production. The full catalog is stored as vector embeddings for semantic search and automatic order creation from natural language.',
          tags: ['Odoo v18', 'n8n', 'Supabase', 'OpenAI'],
        },
        {
          role: 'IT Support Technician',
          company: 'Masesa',
          period: 'Aug 2025 - present',
          description:
            'Autonomous administration of the Odoo v18 ERP for about 35 users, with 15+ custom modules and advanced customizations in Odoo Studio.',
          tags: ['Odoo v18', 'Odoo Studio', 'ERP'],
        },
      ],
    },
    projects: {
      heading: 'Projects',
      items: [
        {
          name: 'Trackify',
          description:
            "Municipal management platform with a need validated by representatives of Costa Rica's Office of the Comptroller General. Presented at Morpho Studio, Stellar's hackathon in Costa Rica.",
          tags: ['Civic tech', 'Stellar', 'Morpho Studio'],
        },
        {
          name: 'Open source in Web3',
          description:
            'Improvements to smart contracts in Solidity and Soroban, reviewed and approved by community maintainers.',
          tags: ['Solidity', 'Soroban', 'Web3'],
        },
      ],
    },
    stack: {
      heading: 'Tech stack',
      note: 'The tools I use to build and ship products to production.',
    },
    contact: {
      availability: 'Open to new opportunities',
      heading: "Let's talk",
      body: "If you're looking for someone who takes AI agents from prototype to production, write me.",
      emailLabel: 'Email',
      form: {
        title: 'AI guides & resources',
        helper: "Leave your email and I'll send you guides and resources on AI and automation. No spam.",
        label: 'Your email',
        placeholder: 'name@email.com',
        button: 'Subscribe',
        sending: 'Sending...',
        success: 'Done! Thanks for subscribing.',
        error: 'Something went wrong. Please try again.',
        invalid: 'Enter a valid email.',
        notConfigured: 'The form will be available soon. In the meantime, reach me by email.',
      },
    },
    footer: { rights: '© 2026 Rodolfo David Acuña López. Made in Costa Rica.' },
  },
};

export const socialLinks = {
  github: 'https://github.com/davidacunalopez',
  linkedin: 'https://www.linkedin.com/in/rodofo-david-acu%C3%B1a-l%C3%B3pez-51b68427b/',
  instagram: 'https://www.instagram.com/davidacunalopezoficial/',
  email: 'rodolfoide69@gmail.com',
};
