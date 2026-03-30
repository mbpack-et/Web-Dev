import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductService } from './services/product.service';
import { Category, Product } from './models';
import { ProductListComponent } from './components/product-list/product-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, ProductListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  categories: Category[] = [];
  products: Product[] = [];
  selectedCategory = signal<Category | null>(null);

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.categories = this.productService.getCategories();
    this.products = this.productService.getAllProducts();
  }

  selectCategory(category: Category): void {
    this.selectedCategory.set(category);
  }

  getSelectedProducts(): Product[] {
    if (!this.selectedCategory()) {
      return [];
    }
    return this.productService.getProductsByCategory(this.selectedCategory()!.id);
  }

  onProductDeleted(productId: number): void {
    this.productService.deleteProduct(productId);
    this.products = this.productService.getAllProducts();
  }

  isSelected(category: Category): boolean {
    return this.selectedCategory()?.id === category.id;
  }
}
