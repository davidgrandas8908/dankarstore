import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CartService } from '../../services/cart.service';

// Componente de barra de navegación principal
@Component({
  selector: 'app-navbar',
  imports: [RouterLink],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss'
})
export class Navbar {
  cartCount = 0;
  sidebarOpen = false;

  constructor(private cartService: CartService) {
    this.cartService.cart$.subscribe(cart => {
      this.cartCount = cart.length;
    });
  }

  toggleSidebar() {
    this.sidebarOpen = !this.sidebarOpen;
  }
}
