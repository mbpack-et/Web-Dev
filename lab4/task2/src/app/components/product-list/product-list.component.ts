import { Component, OnInit, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProductCardComponent } from '../product-card/product-card.component';
import { AddProductComponent } from '../add-product/add-product.component';
import { Product } from '../../models/product.model';

const STORAGE_KEY = 'qaspi_products';

@Component({
  selector: 'app-product-list',
  imports: [ProductCardComponent, AddProductComponent],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css',
})
export class ProductListComponent implements OnInit {
  private http = inject(HttpClient);
  products: Product[] = [];

  ngOnInit(): void {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      this.products = JSON.parse(saved);
    } else {
      this.http.get<Product[]>('data.json').subscribe({
        next: (data) => {
          this.products = data;
          this.save();
        },
        error: (err) => console.error('Failed to load products:', err)
      });
    }
  }

  addProduct(product: Product): void {
    this.products = [...this.products, product];
    this.save();
  }

  private save(): void {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(this.products));
  }
}
