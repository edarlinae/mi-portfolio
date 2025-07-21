import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

// Definimos la estructura de un trabajo
export interface Job {
  date: string;
  title: string;
  company: string;
  description: string[];
}

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './experience.html',
  styleUrl: './experience.css'
})
export class Experience {
  protected readonly jobs = signal<Job[]>([
    {
      date: 'Febrero 2025 - Junio 2025',
      title: 'Programadora',
      company: 'Premium Numbers',
      description: [
        'Desarrollo de un conjunto de extensiones de navegador para Chrome, enfocadas en la optimización de la productividad y la comunicación del usuario.',
        'Implementación de interfaces interactivas para iniciar llamadas y enviar mensajes a través de una API REST de centralita.',
        'Automatización de flujos de trabajo e integración de sistemas CRM utilizando n8n y JavaScript.'
      ]
    },
    {
      date: 'Agosto 2019 - Enero 2025',
      title: 'Formadora y Desarrolladora de Contenidos Digitales',
      company: 'COCEDER',
      description: [
        'Análisis de las necesidades del usuario para diseñar y adaptar contenidos tecnológicos, asegurando una curva de aprendizaje suave.',
        'Soporte técnico y resolución de problemas a usuarios con distintos niveles de competencia digital.'
      ]
    }
  ]);
}