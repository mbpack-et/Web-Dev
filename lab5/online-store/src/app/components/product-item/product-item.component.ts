import { Component, input, output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../../models';

@Component({
  selector: 'app-product-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-item.component.html',
  styleUrl: './product-item.component.css'
})
export class ProductItemComponent {
  product = input.required<Product>();
  delete = output<number>();

  onLike(): void {
    this.product().likes++;
  }

  onDelete(): void {
    if (confirm(`Are you sure you want to delete "${this.product().name}"?`)) {
      this.delete.emit(this.product().id);
    }
  }

  onShare(platform: 'whatsapp' | 'telegram'): void {
    const productName = this.product().name;
    const price = this.product().price;
    const url = this.product().kaspiUrl;
    const message = `Check out this ${productName} for ${price} ₸: ${url}`;
    const encodedMessage = encodeURIComponent(message);

    if (platform === 'whatsapp') {
      window.open(`https://wa.me/?text=${encodedMessage}`, '_blank');
    } else if (platform === 'telegram') {
      window.open(`https://t.me/share/url?url=${encodeURIComponent(url)}&text=${encodedMessage}`, '_blank');
    }
  }
}
