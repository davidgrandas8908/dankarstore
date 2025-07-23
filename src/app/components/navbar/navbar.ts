import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

// Componente de barra de navegación principal
@Component({
  selector: 'app-navbar',
  imports: [RouterLink],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss'
})
export class Navbar {}
