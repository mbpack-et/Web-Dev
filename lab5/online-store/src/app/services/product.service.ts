import { Injectable } from '@angular/core';
import { Category, Product } from '../models';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private categories: Category[] = [
    { id: 1, name: 'Smartphones' },
    { id: 2, name: 'Laptops' },
    { id: 3, name: 'Headphones' },
    { id: 4, name: 'Tablets' }
  ];

  private products: Product[] = [
    // Smartphones (Category 1)
    {
      id: 1,
      name: 'iPhone 15 Pro',
      description: 'Latest Apple flagship with advanced camera and processor',
      price: 599999,
      rating: 4.8,
      image: 'https://images.kaspi.kz/img/m/p/h02/h99/86389406507038.jpg',
      categoryId: 1,
      likes: 0,
      kaspiUrl: 'https://kaspi.kz/shop/p/apple-iphone-15-pro-256gb-seryi-113437389/'
    },
    {
      id: 2,
      name: 'Samsung Galaxy S24',
      description: 'Premium Android phone with exceptional display and performance',
      price: 549999,
      rating: 4.7,
      image: 'https://images.kaspi.kz/img/m/p/hf3/h1d/85687847731230.jpg',
      categoryId: 1,
      likes: 0,
      kaspiUrl: 'https://kaspi.kz/shop/p/samsung-galaxy-s24-256gb-chernyi-113421635/'
    },
    {
      id: 3,
      name: 'Xiaomi 14',
      description: 'Powerful smartphone with great camera and value for money',
      price: 349999,
      rating: 4.6,
      image: 'https://images.kaspi.kz/img/m/p/h52/hef/85359638020126.jpg',
      categoryId: 1,
      likes: 0,
      kaspiUrl: 'https://kaspi.kz/shop/p/xiaomi-14-512gb-seryi-113009849/'
    },
    {
      id: 4,
      name: 'OnePlus 12',
      description: 'Fast and smooth performance with attractive design',
      price: 449999,
      rating: 4.5,
      image: 'https://images.kaspi.kz/img/m/p/h0f/h1c/85508131176478.jpg',
      categoryId: 1,
      likes: 0,
      kaspiUrl: 'https://kaspi.kz/shop/p/oneplus-12-256gb-chernyi-113212815/'
    },
    {
      id: 5,
      name: 'Google Pixel 8',
      description: 'Advanced AI features and exceptional computational photography',
      price: 379999,
      rating: 4.9,
      image: 'https://images.kaspi.kz/img/m/p/h81/h99/85237892202526.jpg',
      categoryId: 1,
      likes: 0,
      kaspiUrl: 'https://kaspi.kz/shop/p/google-pixel-8-128gb-chernyi-112784923/'
    },

    // Laptops (Category 2)
    {
      id: 6,
      name: 'MacBook Pro 16"',
      description: 'Professional-grade laptop with M3 Max chip',
      price: 3299999,
      rating: 4.9,
      image: 'https://images.kaspi.kz/img/m/p/h0d/hee/85686639886366.jpg',
      categoryId: 2,
      likes: 0,
      kaspiUrl: 'https://kaspi.kz/shop/p/apple-macbook-pro-16-m3-max-512gb-seryi-113014633/'
    },
    {
      id: 7,
      name: 'Dell XPS 15',
      description: 'Premium Windows laptop with stunning display and performance',
      price: 2199999,
      rating: 4.7,
      image: 'https://images.kaspi.kz/img/m/p/hc3/h55/85493893505054.jpg',
      categoryId: 2,
      likes: 0,
      kaspiUrl: 'https://kaspi.kz/shop/p/dell-xps-15-9530-113099325/'
    },
    {
      id: 8,
      name: 'Lenovo ThinkPad X1',
      description: 'Business laptop with excellent keyboard and reliability',
      price: 1799999,
      rating: 4.6,
      image: 'https://images.kaspi.kz/img/m/p/hb8/h7f/85505196687390.jpg',
      categoryId: 2,
      likes: 0,
      kaspiUrl: 'https://kaspi.kz/shop/p/lenovo-thinkpad-x1-carbon-112984234/'
    },
    {
      id: 9,
      name: 'ASUS ROG Zephyrus',
      description: 'High-performance gaming laptop with RTX graphics',
      price: 2899999,
      rating: 4.8,
      image: 'https://images.kaspi.kz/img/m/p/h33/h12/85621445791774.jpg',
      categoryId: 2,
      likes: 0,
      kaspiUrl: 'https://kaspi.kz/shop/p/asus-rog-zephyrus-113145632/'
    },
    {
      id: 10,
      name: 'HP Pavilion 15',
      description: 'Affordable and reliable laptop for everyday use',
      price: 649999,
      rating: 4.4,
      image: 'https://images.kaspi.kz/img/m/p/h41/h12/85308639551518.jpg',
      categoryId: 2,
      likes: 0,
      kaspiUrl: 'https://kaspi.kz/shop/p/hp-pavilion-15-113052641/'
    },

    // Headphones (Category 3)
    {
      id: 11,
      name: 'Sony WH-1000XM5',
      description: 'Premium noise-cancelling headphones with exceptional sound',
      price: 199999,
      rating: 4.9,
      image: 'https://images.kaspi.kz/img/m/p/h5e/hf1/85481838436382.jpg',
      categoryId: 3,
      likes: 0,
      kaspiUrl: 'https://kaspi.kz/shop/p/sony-wh-1000xm5-113045234/'
    },
    {
      id: 12,
      name: 'Apple AirPods Max',
      description: 'Premium spatial audio with immersive sound experience',
      price: 349999,
      rating: 4.7,
      image: 'https://images.kaspi.kz/img/m/p/h22/h39/85687456234782.jpg',
      categoryId: 3,
      likes: 0,
      kaspiUrl: 'https://kaspi.kz/shop/p/apple-airpods-max-seryi-113412345/'
    },
    {
      id: 13,
      name: 'Bose QuietComfort 45',
      description: 'Legendary noise cancellation and comfort for long listening',
      price: 149999,
      rating: 4.6,
      image: 'https://images.kaspi.kz/img/m/p/h81/h23/85421087654321.jpg',
      categoryId: 3,
      likes: 0,
      kaspiUrl: 'https://kaspi.kz/shop/p/bose-quietcomfort-45-113021543/'
    },
    {
      id: 14,
      name: 'Sennheiser Momentum 4',
      description: 'Durable wireless headphones with 60-hour battery',
      price: 179999,
      rating: 4.8,
      image: 'https://images.kaspi.kz/img/m/p/h02/he3/85521234567890.jpg',
      categoryId: 3,
      likes: 0,
      kaspiUrl: 'https://kaspi.kz/shop/p/sennheiser-momentum-4-113087654/'
    },
    {
      id: 15,
      name: 'JBL Tour Pro 2',
      description: 'True wireless earbuds with adaptive noise cancellation',
      price: 89999,
      rating: 4.5,
      image: 'https://images.kaspi.kz/img/m/p/h61/h87/85345678901234.jpg',
      categoryId: 3,
      likes: 0,
      kaspiUrl: 'https://kaspi.kz/shop/p/jbl-tour-pro-2-113154321/'
    },

    // Tablets (Category 4)
    {
      id: 16,
      name: 'iPad Pro 12.9"',
      description: 'Professional tablet with M2 chip and stunning display',
      price: 1299999,
      rating: 4.9,
      image: 'https://images.kaspi.kz/img/m/p/h45/h78/85687123456789.jpg',
      categoryId: 4,
      likes: 0,
      kaspiUrl: 'https://kaspi.kz/shop/p/apple-ipad-pro-12-9-m2-128gb-seryi-113456789/'
    },
    {
      id: 17,
      name: 'Samsung Galaxy Tab S9',
      description: 'Premium Android tablet with excellent screen and performance',
      price: 849999,
      rating: 4.7,
      image: 'https://images.kaspi.kz/img/m/p/h98/h45/85512345678901.jpg',
      categoryId: 4,
      likes: 0,
      kaspiUrl: 'https://kaspi.kz/shop/p/samsung-galaxy-tab-s9-128gb-seryi-113234567/'
    },
    {
      id: 18,
      name: 'Lenovo Tab P12',
      description: 'Affordable tablet with great display and battery life',
      price: 449999,
      rating: 4.5,
      image: 'https://images.kaspi.kz/img/m/p/h12/h34/85423456789012.jpg',
      categoryId: 4,
      likes: 0,
      kaspiUrl: 'https://kaspi.kz/shop/p/lenovo-tab-p12-128gb-seryi-113345678/'
    },
    {
      id: 19,
      name: 'Microsoft Surface Go 3',
      description: 'Portable Windows tablet with detachable keyboard',
      price: 599999,
      rating: 4.6,
      image: 'https://images.kaspi.kz/img/m/p/h56/h89/85534567890123.jpg',
      categoryId: 4,
      likes: 0,
      kaspiUrl: 'https://kaspi.kz/shop/p/microsoft-surface-go-3-113456789/'
    },
    {
      id: 20,
      name: 'iPad Air',
      description: 'Mid-range iPad with excellent performance and portability',
      price: 749999,
      rating: 4.8,
      image: 'https://images.kaspi.kz/img/m/p/h78/h90/85645678901234.jpg',
      categoryId: 4,
      likes: 0,
      kaspiUrl: 'https://kaspi.kz/shop/p/apple-ipad-air-256gb-seryi-113567890/'
    }
  ];

  getCategories(): Category[] {
    return this.categories;
  }

  getProductsByCategory(categoryId: number): Product[] {
    return this.products.filter(product => product.categoryId === categoryId);
  }

  getAllProducts(): Product[] {
    return this.products;
  }

  deleteProduct(productId: number): void {
    this.products = this.products.filter(product => product.id !== productId);
  }

  updateProductLikes(productId: number): void {
    const product = this.products.find(p => p.id === productId);
    if (product) {
      product.likes++;
    }
  }
}
