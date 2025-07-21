import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface Technology {
  name: string;
  iconUrl: string | null;
}

export interface Project {
  title: string;
  description: string;
  technologies: Technology[];
  githubUrl: string;
}

@Component({
  selector: 'app-project-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './project-list.html',
  styleUrl: './project-list.css'
})
export class ProjectList {
  protected readonly projects = signal<Project[]>([
    // --- PROYECTO NUEVO AÑADIDO AQUÍ ---
    {
      title: 'Portfolio Profesional (Este Proyecto)',
      description: 'Portfolio personal interactivo desarrollado desde cero con las últimas versiones de Angular para mostrar mis proyectos y habilidades. Incluye modo claro/oscuro y un diseño responsive.',
      technologies: [
        { name: 'Angular', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/angular/angular-original.svg' },
        { name: 'TypeScript', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg' },
        { name: 'SCSS', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sass/sass-original.svg' },
        { name: 'HTML5', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg' }
      ],
      githubUrl: 'https://github.com/edarlinae/portfolio-final' // URL de este mismo portfolio
    },
    // --- FIN DEL PROYECTO NUEVO ---
    {
      title: 'ClickToCall - Extensión de Chrome',
      description: 'Extensión compleja que detecta teléfonos en webs y permite llamar o enviar WhatsApps vía API, inyectando UI dinámica en las páginas.',
      technologies: [
        { name: 'JavaScript (ES6+)', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg' },
        { name: 'HTML5', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg' },
        { name: 'CSS3', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg' },
        { name: 'Chrome Extension API', iconUrl: null }
      ],
      githubUrl: 'https://github.com/edarlinae/ClickToCall'
    },
    {
      title: 'Weather App',
      description: 'Aplicación web completa para consultar el tiempo, con modo oscuro, multi-idioma y historial de búsquedas, consumiendo una API REST.',
      technologies: [
        { name: 'JavaScript (ES6+)', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg' },
        { name: 'HTML5', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg' },
        { name: 'CSS3', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg' },
        { name: 'API REST', iconUrl: null }
      ],
      githubUrl: 'https://github.com/edarlinae/Weather-App'
    }
  ]);

  getTechnologyNames(technologies: Technology[]): string {
    return technologies.map(tech => tech.name).join(', ');
  }
}