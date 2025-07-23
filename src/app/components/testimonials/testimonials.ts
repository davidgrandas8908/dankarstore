import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

// Interfaz para los testimonios
interface Testimonial {
  author: string;
  text: string;
}

// Componente para mostrar testimonios de clientes
@Component({
  selector: 'app-testimonials',
  imports: [CommonModule],
  templateUrl: './testimonials.html',
  styleUrl: './testimonials.scss'
})
export class Testimonials {
  // Lista de testimonios recibida como input
  @Input() testimonials: Testimonial[] = [];
}
