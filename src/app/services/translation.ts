import { Injectable, signal, computed } from '@angular/core';

type Language = 'es' | 'en' | 'fr';

// Definimos la estructura de los objetos para que el código sea más claro
export interface JobTranslations {
  title: string;
  company: string;
  description: string[];
}

export interface ProjectTranslations {
  title: string;
  description: string;
}

@Injectable({
  providedIn: 'root'
})
export class TranslationService {
  private currentLanguage = signal<Language>('es');

  private translations = {
    es: {
      nav_about: 'Sobre mí',
      nav_experience: 'Experiencia',
      nav_projects: 'Mis proyectos',
      nav_contact: 'Contacto',
      hero_subtitle: 'Desarrolladora Frontend dedicada a transformar diseños en experiencias de usuario intuitivas y accesibles, construyendo aplicaciones robustas con tecnología web moderna.',
      hero_button: 'Visita mi LinkedIn',
      about_title: 'Sobre mí',
      about_p1: 'Empecé en el mundo de la integración social, movida por mis valores y mi vocación de ayudar. Sin embargo, la programación llevaba años llamándome a través de mi entorno, de las conversaciones en casa y de los códigos que veía con curiosidad en las pantallas de mi familia de programadores.',
      about_p2: 'Lo que empezó como un juego —pequeñas bromas en el navegador y extensiones con efectos absurdos— se convirtió en una pasión. Entendí su lema: “A programar se aprende programando”. Así que di el paso, me formé en Desarrollo de Aplicaciones Multiplataforma y descubrí que este es el lugar donde mi curiosidad, mi lógica y mis ganas de crear encuentran su sitio.',
      about_p3: 'Lo que me define es mi motivación, mi rápida capacidad de aprendizaje y un profundo respeto por el oficio. Para mí, no es solo un trabajo: es algo que, sin saberlo, llevo años preparando.',
      experience_title: 'Experiencia',
      projects_title: 'Mis Proyectos',
      contact_title: 'Hablemos',
      contact_p1: 'Estoy buscando activamente nuevas oportunidades y desafíos como desarrolladora. Si crees que mi perfil encaja en tu equipo o proyecto, no dudes en contactarme.',
      footer_text: '© 2025 - Desarrollado con Angular y mucho café por Alicia Caparrós.',
      // --- Textos de Experiencia ---
      job1: {
        title: 'Programadora',
        company: 'Premium Numbers',
        description: [
          'Desarrollo de un conjunto de extensiones de navegador para Chrome, enfocadas en la optimización de la productividad y la comunicación del usuario.',
          'Implementación de interfaces interactivas para iniciar llamadas y enviar mensajes a través de una API REST de centralita.',
          'Automatización de flujos de trabajo e integración de sistemas CRM utilizando n8n y JavaScript.'
        ]
      },
      job2: {
        title: 'Formadora y Desarrolladora de Contenidos Digitales',
        company: 'COCEDER',
        description: [
          'Análisis de las necesidades del usuario para diseñar y adaptar contenidos tecnológicos, asegurando una curva de aprendizaje suave.',
          'Soporte técnico y resolución de problemas a usuarios con distintos niveles de competencia digital.'
        ]
      },
      // --- Textos de Proyectos ---
      project1: {
        title: 'Portfolio Profesional (Este Proyecto)',
        description: 'Portfolio personal interactivo desarrollado desde cero con las últimas versiones de Angular para mostrar mis proyectos y habilidades. Incluye modo claro/oscuro y un diseño responsive.',
      },
      project2: {
        title: 'ClickToCall - Extensión de Chrome',
        description: 'Extensión compleja que detecta teléfonos en webs y permite llamar o enviar WhatsApps vía API, inyectando UI dinámica en las páginas.',
      },
      project3: {
        title: 'Weather App',
        description: 'Aplicación web completa para consultar el tiempo, con modo claro, multi-idioma y historial de búsquedas, consumiendo una API REST.',
      }
    },
    en: {
      nav_about: 'About me',
      nav_experience: 'Experience',
      nav_projects: 'My projects',
      nav_contact: 'Contact',
      hero_subtitle: 'Frontend Developer dedicated to transforming designs into intuitive and accessible user experiences, building robust applications with modern web technology.',
      hero_button: 'Visit my LinkedIn',
      about_title: 'About Me',
      about_p1: 'I started in the world of social integration, driven by my values and my vocation to help. However, programming had been calling me for years through my environment, from conversations at home, and the code I curiously watched on my family of programmers\' screens.',
      about_p2: 'What began as a game—small pranks in the browser and extensions with absurd effects—became a passion. I understood their motto: “You learn to code by coding.” So I took the step, trained in Multi-platform Application Development, and discovered that this is the place where my curiosity, logic, and desire to create find their home.',
      about_p3: 'What defines me is my motivation, my rapid learning ability, and a deep respect for the craft. For me, this isn\'t just a job: it\'s something I\'ve unknowingly been preparing for for years.',
      experience_title: 'Experience',
      projects_title: 'My Projects',
      contact_title: 'Let\'s Talk',
      contact_p1: 'I am actively looking for new opportunities and challenges as a developer. If you think my profile fits your team or project, do not hesitate to contact me.',
      footer_text: '© 2025 - Developed with Angular and lots of coffee by Alicia Caparrós.',
      // --- Experience Texts ---
      job1: {
        title: 'Programmer',
        company: 'Premium Numbers',
        description: [
          'Development of a set of browser extensions for Chrome, focused on optimizing user productivity and communication.',
          'Implementation of interactive interfaces to initiate calls and send messages through a PBX REST API.',
          'Workflow automation and CRM systems integration using n8n and JavaScript.'
        ]
      },
      job2: {
        title: 'Trainer and Digital Content Developer',
        company: 'COCEDER',
        description: [
          'Analysis of user needs to design and adapt technological content, ensuring a smooth learning curve.',
          'Technical support and problem-solving for users with different levels of digital competence.'
        ]
      },
      // --- Project Texts ---
      project1: {
        title: 'Professional Portfolio (This Project)',
        description: 'Interactive personal portfolio developed from scratch with the latest versions of Angular to showcase my projects and skills. Features light/dark mode and a responsive design.',
      },
      project2: {
        title: 'ClickToCall - Chrome Extension',
        description: 'Complex extension that detects phone numbers on websites and allows calling or sending WhatsApp messages via API, injecting dynamic UI into the pages.',
      },
      project3: {
        title: 'Weather App',
        description: 'Complete web application to check the weather, with dark mode, multi-language support, and search history, consuming a REST API.',
      }
    },
    fr: {
      nav_about: 'À propos de moi',
      nav_experience: 'Expérience',
      nav_projects: 'Mes projets',
      nav_contact: 'Contact',
      hero_subtitle: 'Développeuse Frontend dédiée à transformer des designs en expériences utilisateur intuitives et accessibles, en créant des applications robustes avec la technologie web moderne.',
      hero_button: 'Visitez mon LinkedIn',
      about_title: 'À Propos de Moi',
      about_p1: 'J\'ai commencé dans le monde de l\'intégration sociale, motivée par mes valeurs et ma vocation d\'aider. Cependant, la programmation m\'appelait depuis des années à travers mon environnement, les conversations à la maison et le code que j\'observais avec curiosité sur les écrans de ma famille de programmeurs.',
      about_p2: 'Ce qui a commencé comme un jeu — des petites blagues dans le navigateur et des extensions aux effets absurdes — est devenu une passion. J\'ai compris leur devise : « C\'est en codant qu\'on apprend à coder. » J\'ai donc franchi le pas, je me suis formée en Développement d\'Applications Multiplateformes et j\'ai découvert que c\'est l\'endroit où ma curiosité, ma logique et mon envie de créer trouvent leur place.',
      about_p3: 'Ce qui me définit, c\'est ma motivation, ma capacité d\'apprentissage rapide et un profond respect pour le métier. Pour moi, ce n\'est pas seulement un travail : c\'est quelque chose que, sans le savoir, je prépare depuis des années.',
      experience_title: 'Expérience',
      projects_title: 'Mes Projets',
      contact_title: 'Parlons-en',
      contact_p1: 'Je suis activement à la recherche de nouvelles opportunités et de nouveaux défis en tant que développeuse. Si vous pensez que mon profil correspond à votre équipe ou à votre projet, n\'hésitez pas à me contacter.',
      footer_text: '© 2025 - Développé avec Angular et beaucoup de café par Alicia Caparrós.',
      // --- Textes d'Expérience ---
      job1: {
        title: 'Programmeuse',
        company: 'Premium Numbers',
        description: [
          'Développement d\'un ensemble d\'extensions de navigateur pour Chrome, axées sur l\'optimisation de la productivité et de la communication de l\'utilisateur.',
          'Implémentation d\'interfaces interactives pour lancer des appels et envoyer des messages via une API REST de central téléphonique.',
          'Automatisation des flux de travail et intégration des systèmes CRM en utilisant n8n et JavaScript.'
        ]
      },
      job2: {
        title: 'Formatrice et Développeuse de Contenus Numériques',
        company: 'COCEDER',
        description: [
          'Analyse des besoins des utilisateurs pour concevoir et adapter des contenus technologiques, assurant une courbe d\'apprentissage douce.',
          'Support technique et résolution de problèmes pour des utilisateurs ayant différents niveaux de compétence numérique.'
        ]
      },
      // --- Textes des Projets ---
      project1: {
        title: 'Portfolio Professionnel (Ce Projet)',
        description: 'Portfolio personnel interactif développé à partir de zéro avec les dernières versions d\'Angular pour présenter mes projets et compétences. Inclut un mode clair/sombre et un design responsive.',
      },
      project2: {
        title: 'ClickToCall - Extension Chrome',
        description: 'Extension complexe qui détecte les numéros de téléphone sur les sites web et permet d\'appeler ou d\'envoyer des messages WhatsApp via une API, en injectant une UI dynamique dans les pages.',
      },
      project3: {
        title: 'Weather App',
        description: 'Application web complète pour consulter la météo, avec un mode sombre, un support multilingue et un historique de recherche, consommant une API REST.',
      }
    }
  };

  public t = computed(() => this.translations[this.currentLanguage()]);

  public setLanguage(lang: Language) {
    this.currentLanguage.set(lang);
  }
}