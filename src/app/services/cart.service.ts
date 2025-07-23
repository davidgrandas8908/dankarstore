import { Injectable } from '@angular/core';

interface Product {
  name: string;
  price: number;
  offerPrice: number;
  image: string;
}

@Injectable({ providedIn: 'root' })
export class CartService {
  private cart: Product[] = [];

  getCart(): Product[] {
    return this.cart;
  }

  addToCart(product: Product) {
    this.cart.push(product);
  }

  clearCart() {
    this.cart = [];
  }
} 