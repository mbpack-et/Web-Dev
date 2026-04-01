#!/usr/bin/env python
"""
Populate the database with sample data.
Run this after migrations with: python manage.py shell < populate_data.py
Or: python manage.py shell
Then copy-paste the code from this file
"""

from api.models import Category, Product

# Create categories
categories = [
    {'name': 'Smartphones'},
    {'name': 'Laptops'},
    {'name': 'Headphones'},
    {'name': 'Tablets'},
]

# Create products data
products_data = [
    # Smartphones
    {'name': 'iPhone 15 Pro', 'price': 599999, 'description': 'Latest Apple flagship with advanced camera', 'count': 10, 'category': 'Smartphones'},
    {'name': 'Samsung Galaxy S24', 'price': 549999, 'description': 'Premium Android phone with exceptional display', 'count': 8, 'category': 'Smartphones'},
    {'name': 'Xiaomi 14', 'price': 349999, 'description': 'Powerful smartphone with great value', 'count': 15, 'category': 'Smartphones'},
    {'name': 'OnePlus 12', 'price': 449999, 'description': 'Fast and smooth performance', 'count': 12, 'category': 'Smartphones'},
    {'name': 'Google Pixel 8', 'price': 379999, 'description': 'Advanced AI features and photography', 'count': 9, 'category': 'Smartphones'},
    
    # Laptops
    {'name': 'MacBook Pro 16"', 'price': 3299999, 'description': 'Professional-grade laptop with M3 Max', 'count': 5, 'category': 'Laptops'},
    {'name': 'Dell XPS 15', 'price': 2199999, 'description': 'Premium Windows laptop', 'count': 6, 'category': 'Laptops'},
    {'name': 'Lenovo ThinkPad X1', 'price': 1799999, 'description': 'Business laptop with excellent keyboard', 'count': 7, 'category': 'Laptops'},
    {'name': 'ASUS ROG Zephyrus', 'price': 2899999, 'description': 'Gaming laptop with RTX graphics', 'count': 4, 'category': 'Laptops'},
    {'name': 'HP Pavilion 15', 'price': 649999, 'description': 'Affordable and reliable laptop', 'count': 14, 'category': 'Laptops'},
    
    # Headphones
    {'name': 'Sony WH-1000XM5', 'price': 199999, 'description': 'Premium noise-cancelling headphones', 'count': 20, 'category': 'Headphones'},
    {'name': 'Apple AirPods Max', 'price': 349999, 'description': 'Premium spatial audio experience', 'count': 11, 'category': 'Headphones'},
    {'name': 'Bose QuietComfort 45', 'price': 149999, 'description': 'Legendary noise cancellation', 'count': 16, 'category': 'Headphones'},
    {'name': 'Sennheiser Momentum 4', 'price': 179999, 'description': 'Durable wireless headphones', 'count': 13, 'category': 'Headphones'},
    {'name': 'JBL Tour Pro 2', 'price': 89999, 'description': 'True wireless earbuds', 'count': 25, 'category': 'Headphones'},
    
    # Tablets
    {'name': 'iPad Pro 12.9"', 'price': 1299999, 'description': 'Professional tablet with M2 chip', 'count': 7, 'category': 'Tablets'},
    {'name': 'Samsung Galaxy Tab S9', 'price': 849999, 'description': 'Premium Android tablet', 'count': 10, 'category': 'Tablets'},
    {'name': 'Lenovo Tab P12', 'price': 449999, 'description': 'Affordable tablet with great display', 'count': 18, 'category': 'Tablets'},
    {'name': 'Microsoft Surface Go 3', 'price': 599999, 'description': 'Windows tablet with detachable keyboard', 'count': 8, 'category': 'Tablets'},
    {'name': 'iPad Air', 'price': 749999, 'description': 'Mid-range iPad with excellent performance', 'count': 12, 'category': 'Tablets'},
]

# Create categories
print("Creating categories...")
created_categories = {}
for cat_data in categories:
    cat, created = Category.objects.get_or_create(name=cat_data['name'])
    created_categories[cat.name] = cat
    if created:
        print(f"  ✓ Created category: {cat.name}")
    else:
        print(f"  - Category already exists: {cat.name}")

# Create products
print("\nCreating products...")
for prod_data in products_data:
    category = created_categories[prod_data['category']]
    product, created = Product.objects.get_or_create(
        name=prod_data['name'],
        defaults={
            'price': prod_data['price'],
            'description': prod_data['description'],
            'count': prod_data['count'],
            'is_active': True,
            'category': category
        }
    )
    if created:
        print(f"  ✓ Created product: {product.name}")
    else:
        print(f"  - Product already exists: {product.name}")

print("\nData population complete!")
print(f"Total categories: {Category.objects.count()}")
print(f"Total products: {Product.objects.count()}")
