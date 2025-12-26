import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { CartService, CartItem } from '../../services/cart.service';

@Component({
  selector: 'app-checkout',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './checkout.component.html',
  styleUrl: './checkout.component.scss'
})
export class CheckoutComponent implements OnInit {

  cartItems: CartItem[] = [];
  total: number = 0;

  customer = {
    name: '',
    email: '',
    address: '',
    city: '',
    zip: ''
  };

  constructor(private cartService: CartService, private router: Router) {}

  ngOnInit() {
    this.cartItems = this.cartService.getCartItems();
    this.total = this.cartService.getTotal();
    if (this.cartItems.length === 0) {
      this.router.navigate(['/cart']);
    }
  }

  onSubmit() {
    // Simulate order placement
    alert('Order placed successfully!');
    this.cartService.clearCart();
    this.router.navigate(['/']);
  }
}
