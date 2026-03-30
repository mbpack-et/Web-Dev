from django.urls import path
from . import views

urlpatterns = [
    path('products/', views.products_list, name='products-list'),
    path('products/<int:product_id>/', views.product_detail, name='product-detail'),
    path('categories/', views.categories_list, name='categories-list'),
    path('categories/<int:category_id>/', views.category_detail, name='category-detail'),
    path('categories/<int:category_id>/products/', views.products_by_category, name='category-products'),
]
