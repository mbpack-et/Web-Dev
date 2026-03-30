import json
from django.http import JsonResponse
from django.views.decorators.http import require_http_methods
from .models import Product, Category


@require_http_methods(["GET"])
def products_list(request):
    """Get list of all products."""
    products = Product.objects.select_related('category').values(
        'id', 'name', 'price', 'description', 'count', 'is_active', 'category__id', 'category__name'
    )
    data = []
    for product in products:
        data.append({
            'id': product['id'],
            'name': product['name'],
            'price': product['price'],
            'description': product['description'],
            'count': product['count'],
            'is_active': product['is_active'],
            'category': {
                'id': product['category__id'],
                'name': product['category__name']
            }
        })
    return JsonResponse({'data': data, 'count': len(data)}, safe=False)


@require_http_methods(["GET"])
def product_detail(request, product_id):
    """Get a single product by ID."""
    try:
        product = Product.objects.select_related('category').get(id=product_id)
        data = {
            'id': product.id,
            'name': product.name,
            'price': product.price,
            'description': product.description,
            'count': product.count,
            'is_active': product.is_active,
            'category': {
                'id': product.category.id,
                'name': product.category.name
            }
        }
        return JsonResponse({'data': data}, safe=False)
    except Product.DoesNotExist:
        return JsonResponse({'error': f'Product with ID {product_id} not found'}, status=404)


@require_http_methods(["GET"])
def categories_list(request):
    """Get list of all categories."""
    categories = Category.objects.values('id', 'name')
    data = list(categories)
    return JsonResponse({'data': data, 'count': len(data)}, safe=False)


@require_http_methods(["GET"])
def category_detail(request, category_id):
    """Get a single category by ID."""
    try:
        category = Category.objects.get(id=category_id)
        data = {
            'id': category.id,
            'name': category.name
        }
        return JsonResponse({'data': data}, safe=False)
    except Category.DoesNotExist:
        return JsonResponse({'error': f'Category with ID {category_id} not found'}, status=404)


@require_http_methods(["GET"])
def products_by_category(request, category_id):
    """Get list of products for a specific category."""
    try:
        category = Category.objects.get(id=category_id)
        products = Product.objects.filter(category=category).values(
            'id', 'name', 'price', 'description', 'count', 'is_active'
        )
        data = []
        for product in products:
            data.append({
                'id': product['id'],
                'name': product['name'],
                'price': product['price'],
                'description': product['description'],
                'count': product['count'],
                'is_active': product['is_active']
            })
        return JsonResponse({
            'category': {'id': category.id, 'name': category.name},
            'products': data,
            'count': len(data)
        }, safe=False)
    except Category.DoesNotExist:
        return JsonResponse({'error': f'Category with ID {category_id} not found'}, status=404)
