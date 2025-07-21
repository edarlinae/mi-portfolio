import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class Header {
  isDarkMode = signal(false);

  constructor() {
    // Comprueba si el usuario ya tenía un tema preferido
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    this.isDarkMode.set(prefersDark);
    document.body.classList.toggle('dark-mode', prefersDark);
  }

  toggleTheme() {
    this.isDarkMode.update(value => !value);
    document.body.classList.toggle('dark-mode', this.isDarkMode());
  }
}