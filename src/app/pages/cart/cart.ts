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
  cart: Product[] = [];

  constructor(private cartService: CartService) {
    this.updateCart();
  }

  updateCart() {
    this.cart = this.cartService.getCart();
  }

  get total() {
    return this.cart.reduce((sum, item) => sum + item.offerPrice, 0);
  }

  remove(product: Product) {
    this.cartService.removeFromCart(product);
    this.updateCart();
  }

  clearCart() {
    this.cartService.clearCart();
    this.updateCart();
  }
}
