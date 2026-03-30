from django.test import TestCase
from .models import Category, Product


class CategoryModelTest(TestCase):
    """Test Category model."""

    def setUp(self):
        self.category = Category.objects.create(name='Electronics')

    def test_category_creation(self):
        self.assertEqual(self.category.name, 'Electronics')
        self.assertTrue(str(self.category), 'Electronics')


class ProductModelTest(TestCase):
    """Test Product model."""

    def setUp(self):
        self.category = Category.objects.create(name='Smartphones')
        self.product = Product.objects.create(
            name='iPhone 15',
            price=999.99,
            description='Latest Apple Phone',
            count=10,
            is_active=True,
            category=self.category
        )

    def test_product_creation(self):
        self.assertEqual(self.product.name, 'iPhone 15')
        self.assertEqual(self.product.price, 999.99)
        self.assertEqual(self.product.category.name, 'Smartphones')
        self.assertTrue(self.product.is_active)

    def test_product_count(self):
        self.assertEqual(self.product.count, 10)
