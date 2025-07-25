import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Testimonials } from '../../components/testimonials/testimonials';
import { CartService } from '../../services/cart.service';
import { Subscription } from 'rxjs';

// Interfaz para los productos en oferta
interface Product {
  name: string;
  price: number;
  offerPrice: number;
  image: string;
}

// Interfaz para los testimonios de clientes
interface Testimonial {
  author: string;
  text: string;
}

@Component({
  selector: 'app-home',
  imports: [CommonModule, Testimonials],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home {
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
    }
  ];
  testimonials: Testimonial[] = [
    {
      author: 'Camilo Durán',
      text: 'Recientemente compré este producto y estoy muy satisfecho con mi compra. El servicio fue excelente y el producto superó mis expectativas. ¡Lo recomendaría a todos!'
    },
    {
      author: 'Isabella Marín',
      text: '¡No puedo estar más contento con mi última compra! Recibí un servicio excelente, el envío fue súper rápido y la calidad del producto es impresionante.'
    },
    {
      author: 'Esteban Carrasco',
      text: 'Recientemente compré un producto y quedé encantado con el servicio de pago contra entrega y la calidad del producto. ¡No puedo dejar de recomendarlo!'
    }
  ];
  cart: Product[] = [];
  private sub: Subscription;

  constructor(private cartService: CartService) {
    this.sub = this.cartService.cart$.subscribe(cart => this.cart = cart);
  }

  isInCart(product: Product) {
    return this.cartService.isInCart(product);
  }

  addOrRemove(product: Product) {
    if (this.isInCart(product)) {
      this.cartService.removeFromCart(product);
    } else {
      this.cartService.addToCart(product);
    }
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
