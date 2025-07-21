import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-contact-form',
  standalone: true,
  imports: [],
  templateUrl: './contact-form.html',
  styleUrl: './contact-form.css'
})
export class ContactForm {
  // Información extraída de tu CV
  protected readonly email = signal('caparrosmasiaalicia@gmail.com');
  protected readonly phone = signal('676 28 40 60');
}