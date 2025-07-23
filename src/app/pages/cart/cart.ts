import { Component } from '@angular/core';
import { CommonModule, DecimalPipe } from '@angular/common';
import { CartService } from '../../services/cart.service';

// Interfaz para los productos en el carrito
interface Product {
  name: string;
  price: number;
  offerPrice: number;
  image: string;
}

@Component({
  selector: 'app-cart',
  imports: [CommonModule, DecimalPipe],
  templateUrl: './cart.html',
  styleUrl: './cart.scss'
})
export class Cart {
  // Lista de productos agregados al carrito
  cart: Product[] = [];

  // Inyecta el servicio de carrito y obtiene los productos actuales
  constructor(private cartService: CartService) {
    this.cart = this.cartService.getCart();
  }

  // Calcula el total del carrito sumando los precios de oferta
  get total() {
    return this.cart.reduce((sum, item) => sum + item.offerPrice, 0);
  }

  // Vacía el carrito de compras
  clearCart() {
    this.cartService.clearCart();
    this.cart = [];
  }
}
