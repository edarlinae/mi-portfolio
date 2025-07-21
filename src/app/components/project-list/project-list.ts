import { Component, signal, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslationService, ProjectTranslations } from '../../services/translation';

export interface Technology {
  name: string;
  iconUrl: string | null;
}

export interface Project {
  translationKey: 'project1' | 'project2' | 'project3'; // Tipo simplificado
  imageUrl: string;
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
  private translationService = inject(TranslationService);
  public t = this.translationService.t;

  protected readonly projects = signal<Project[]>([
    {
      translationKey: 'project1',
      imageUrl: 'assets/projects/portfolio-preview.png',
      technologies: [
        { name: 'Angular', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/angular/angular-original.svg' },
        { name: 'TypeScript', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg' },
        { name: 'SCSS', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sass/sass-original.svg' },
        { name: 'HTML5', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg' }
      ],
      githubUrl: 'https://github.com/edarlinae/portfolio-final'
    },
    {
      translationKey: 'project2',
      imageUrl: 'assets/projects/clicktocall-preview.png',
      technologies: [
        { name: 'JavaScript (ES6+)', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg' },
        { name: 'HTML5', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg' },
        { name: 'CSS3', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg' },
        { name: 'Chrome Extension API', iconUrl: null }
      ],
      githubUrl: 'https://github.com/edarlinae/ClickToCall'
    },
    {
      translationKey: 'project3',
      imageUrl: 'assets/projects/weather-app-preview.jpg',
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

  // Nueva función para obtener la traducción de forma segura
  getProjectTranslation(key: 'project1' | 'project2' | 'project3'): ProjectTranslations {
    return this.t()[key];
  }
}