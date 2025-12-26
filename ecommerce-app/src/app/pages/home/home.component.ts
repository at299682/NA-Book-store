import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ProductsService, Product } from '../../services/cart.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  featuredBooks: Product[] = [];

  constructor(private productsService: ProductsService) {}

  ngOnInit() {
    const allProducts = this.productsService.getProducts();
    // Show first 4 books as featured
    this.featuredBooks = allProducts.slice(0, 4);
  }
}
