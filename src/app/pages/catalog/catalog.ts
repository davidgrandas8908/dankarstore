import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartService } from '../../services/cart.service';

// Interfaz para los productos del catálogo
interface Product {
  name: string;
  price: number;
  offerPrice: number;
  image: string;
}

@Component({
  selector: 'app-catalog',
  imports: [CommonModule],
  templateUrl: './catalog.html',
  styleUrl: './catalog.scss',
  providers: [CartService]
})
export class Catalog {
  // Lista de productos disponibles en el catálogo
  products: Product[] = [
    {
      name: 'Masajeador Corporal Cervical Cuello',
      price: 190000,
      offerPrice: 119900,
      image: 'https://dankarstore.com/cdn/shop/files/masajeador.jpg?v=1709672012&width=600'
    },
    {
      name: 'PROYECTOR HY300 CILINDRO',
      price: 299900,
      offerPrice: 249900,
      image: 'https://dankarstore.com/cdn/shop/files/proyector.jpg?v=1709672012&width=600'
    },
    {
      name: 'Reloj Inteligente X8',
      price: 150000,
      offerPrice: 99000,
      image: 'https://dankarstore.com/cdn/shop/files/reloj.jpg?v=1709672012&width=600'
    }
  ];

  // Inyecta el servicio de carrito para agregar productos
  constructor(private cartService: CartService) {}

  // Método para agregar un producto al carrito
  addToCart(product: Product) {
    this.cartService.addToCart(product);
  }
}
