from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import Product


@api_view(['DELETE'])
def delete_inactive_products(request):
    """Delete all products with is_active=False"""
    inactive_products = Product.objects.filter(is_active=False)
    deleted_count, _ = inactive_products.delete()
    
    return Response(
        {
            'message': 'Inactive products deleted successfully',
            'deleted_count': deleted_count
        },
        status=status.HTTP_200_OK
    )
  