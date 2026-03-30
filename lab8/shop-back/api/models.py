from django.db import models


class Category(models.Model):
    """Category model for organizing products."""
    name = models.CharField(max_length=255)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        verbose_name = "Category"
        verbose_name_plural = "Categories"
        ordering = ['name']

    def __str__(self):
        return self.name


class Product(models.Model):
    """Product model with category relationship."""
    name = models.CharField(max_length=255)
    price = models.FloatField()
    description = models.TextField()
    count = models.IntegerField(default=0)
    is_active = models.BooleanField(default=True)
    category = models.ForeignKey(Category, on_delete=models.CASCADE, related_name='products')
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        verbose_name = "Product"
        verbose_name_plural = "Products"
        ordering = ['-created_at']

    def __str__(self):
        return self.name
