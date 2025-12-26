import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, Router } from '@angular/router';
import { ProductsService, Product, CartService } from '../../services/cart.service';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  products: Product[] = [];

  constructor(private productsService: ProductsService, private cartService: CartService, private router: Router) {}

  ngOnInit() {
    this.products = this.productsService.getProducts();
  }

 addToCart(product: Product) {
  // Add product to cart via your service
  this.cartService.addToCart(product);

  // Optional: Show a better notification (instead of alert)
  // If you don't have a toast/snackbar yet, you can keep alert for now
  alert(`${product.name} added to cart!`);

  // Redirect to the cart page
  this.router.navigate(['/cart']);
}
}
