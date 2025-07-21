import { Component, signal, inject } from '@angular/core';
import { TranslationService } from '../../../services/translation'; // <-- RUTA CORREGIDA

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class Header {
  private translationService = inject(TranslationService);
  public t = this.translationService.t;
  
  isDarkMode = signal(false);

  constructor() {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    this.isDarkMode.set(prefersDark);
    document.body.classList.toggle('dark-mode', prefersDark);
  }

  toggleTheme() {
    this.isDarkMode.update(value => !value);
    document.body.classList.toggle('dark-mode', this.isDarkMode());
  }
  
  changeLanguage(lang: 'es' | 'en' | 'fr') {
    this.translationService.setLanguage(lang);
  }
}