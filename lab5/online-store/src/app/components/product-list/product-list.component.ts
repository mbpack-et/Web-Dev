import { Component, input, output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../../models';
import { ProductItemComponent } from '../product-item/product-item.component';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, ProductItemComponent],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {
  products = input<Product[]>([]);
  productDeleted = output<number>();

  get displayProducts(): Product[] {
    return this.products();
  }

  onProductDelete(productId: number): void {
    this.productDeleted.emit(productId);
  }
}
