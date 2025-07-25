import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

interface Product {
  name: string;
  price: number;
  offerPrice: number;
  image: string;
}

@Injectable({ providedIn: 'root' })
export class CartService {
  private cart: Product[] = [];
  private cartSubject = new BehaviorSubject<Product[]>(this.cart);
  cart$ = this.cartSubject.asObservable();

  getCart(): Product[] {
    return this.cart;
  }

  addToCart(product: Product) {
    if (!this.isInCart(product)) {
      this.cart.push(product);
      this.cartSubject.next(this.cart);
    }
  }

  removeFromCart(product: Product) {
    this.cart = this.cart.filter(p => p.name !== product.name);
    this.cartSubject.next(this.cart);
  }

  isInCart(product: Product): boolean {
    return this.cart.some(p => p.name === product.name);
  }

  clearCart() {
    this.cart = [];
    this.cartSubject.next(this.cart);
  }
} 