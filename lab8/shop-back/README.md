# Django Online Shop Backend - Lab 8

A Django REST API backend for the Angular Online Store application (Lab 5).

## Project Overview

This project provides a RESTful API backend that serves product and category data in JSON format. It's designed to integrate with the Angular frontend built in Lab 5.

## Learning Objectives

By completing this project, you will understand:
- ✅ Django project and app structure
- ✅ Model definition with ForeignKey relationships
- ✅ Database migrations
- ✅ Functional views returning JSON responses
- ✅ URL routing and parameter handling
- ✅ Django request/response processing
- ✅ Django admin interface

## Project Structure

```
shop-back/
├── shop/                      # Django project configuration
│   ├── __init__.py
│   ├── settings.py           # Project settings
│   ├── urls.py               # Main URL configuration
│   ├── asgi.py
│   └── wsgi.py
├── api/                       # Django app with models and API
│   ├── migrations/           # Database migration files
│   ├── __init__.py
│   ├── admin.py              # Django admin configuration
│   ├── apps.py               # App configuration
│   ├── models.py             # Category and Product models
│   ├── tests.py              # Unit tests
│   ├── urls.py               # API URL routing
│   └── views.py              # API view functions
├── manage.py                 # Django management script
├── requirements.txt          # Python dependencies
├── .gitignore               # Git ignore configuration
└── README.md                # This file
```

## Models

### Category
```python
- id (BigAutoField, primary key)
- name (CharField, max_length=255)
- created_at (DateTimeField, auto_now_add)
- updated_at (DateTimeField, auto_now)
```

### Product
```python
- id (BigAutoField, primary key)
- name (CharField, max_length=255)
- price (FloatField)
- description (TextField)
- count (IntegerField, default=0)
- is_active (BooleanField, default=True)
- category (ForeignKey to Category)
- created_at (DateTimeField, auto_now_add)
- updated_at (DateTimeField, auto_now)
```

## API Endpoints

All endpoints return JSON format responses.

### 1. List All Products
**Endpoint**: `GET /api/products/`

**Response**:
```json
{
  "data": [
    {
      "id": 1,
      "name": "iPhone 15 Pro",
      "price": 599999,
      "description": "Latest Apple flagship",
      "count": 5,
      "is_active": true,
      "category": {
        "id": 1,
        "name": "Smartphones"
      }
    }
  ],
  "count": 20
}
```

### 2. Get Single Product
**Endpoint**: `GET /api/products/<int:id>/`

**Response**:
```json
{
  "data": {
    "id": 1,
    "name": "iPhone 15 Pro",
    "price": 599999,
    "description": "Latest Apple flagship",
    "count": 5,
    "is_active": true,
    "category": {
      "id": 1,
      "name": "Smartphones"
    }
  }
}
```

### 3. List All Categories
**Endpoint**: `GET /api/categories/`

**Response**:
```json
{
  "data": [
    {
      "id": 1,
      "name": "Smartphones"
    },
    {
      "id": 2,
      "name": "Laptops"
    }
  ],
  "count": 4
}
```

### 4. Get Single Category
**Endpoint**: `GET /api/categories/<int:id>/`

**Response**:
```json
{
  "data": {
    "id": 1,
    "name": "Smartphones"
  }
}
```

### 5. Get Products by Category
**Endpoint**: `GET /api/categories/<int:id>/products/`

**Response**:
```json
{
  "category": {
    "id": 1,
    "name": "Smartphones"
  },
  "products": [
    {
      "id": 1,
      "name": "iPhone 15 Pro",
      "price": 599999,
      "description": "Latest Apple flagship",
      "count": 5,
      "is_active": true
    }
  ],
  "count": 5
}
```

## Setup Instructions

### 1. Create Virtual Environment

#### On Windows (PowerShell):
```powershell
python -m venv venv
.\venv\Scripts\Activate.ps1
```

#### On macOS/Linux:
```bash
python3 -m venv venv
source venv/bin/activate
```

### 2. Install Dependencies
```bash
pip install -r requirements.txt
```

### 3. Create Database Migrations
```bash
python manage.py makemigrations
```

### 4. Apply Migrations
```bash
python manage.py migrate
```

### 5. Create Superuser (Admin)
```bash
python manage.py createsuperuser
```

### 6. Run Development Server
```bash
python manage.py runserver
```

Server will be available at: `http://localhost:8000`

### 7. Access Django Admin
Navigate to: `http://localhost:8000/admin/`

## Testing Endpoints

### Using cURL

```bash
# Get all products
curl http://localhost:8000/api/products/

# Get single product
curl http://localhost:8000/api/products/1/

# Get all categories
curl http://localhost:8000/api/categories/

# Get single category
curl http://localhost:8000/api/categories/1/

# Get products by category
curl http://localhost:8000/api/categories/1/products/
```

### Using Python Requests

```python
import requests

# Get all products
response = requests.get('http://localhost:8000/api/products/')
print(response.json())

# Get single product
response = requests.get('http://localhost:8000/api/products/1/')
print(response.json())
```

## Database

The project uses SQLite by default (db.sqlite3). To use PostgreSQL or another database, update the `DATABASES` setting in `shop/settings.py`.

## Django Admin

Access the admin interface at `/admin/` to:
- Add/Edit/Delete Categories
- Add/Edit/Delete Products
- Filter products by category and active status
- Search products and categories

## Running Tests

```bash
python manage.py test
```

## Code Quality

- ✅ PEP 8 compliant Python code
- ✅ Comprehensive docstrings
- ✅ Proper error handling
- ✅ JSON validation
- ✅ HTTP method restrictions
- ✅ Unit tests included

## Environment Variables (Optional)

Create a `.env` file in the root directory:

```
DEBUG=True
SECRET_KEY=your-secret-key
ALLOWED_HOSTS=localhost,127.0.0.1
DATABASE_URL=sqlite:///db.sqlite3
```

## Git Repository

### Initialize and Push to GitHub

```bash
git init
git add .
git commit -m "Initial commit: Django Online Shop Backend"
git remote add origin <YOUR_GITHUB_REPO_URL>
git branch -M main
git push -u origin main
```

### Important: Verify .gitignore

Ensure the following are in `.gitignore` (already configured):
- venv/
- __pycache__/
- *.pyc
- db.sqlite3
- .env

## Common Commands

```bash
# Start server
python manage.py runserver

# Create migrations
python manage.py makemigrations

# Apply migrations
python manage.py migrate

# Create superuser
python manage.py createsuperuser

# Run tests
python manage.py test

# Shell access to database
python manage.py shell

# Collect static files
python manage.py collectstatic
```

## Troubleshooting

### ModuleNotFoundError: No module named 'django'
```bash
pip install -r requirements.txt
```

### Port 8000 Already in Use
```bash
python manage.py runserver 8001
```

### Database Issues
```bash
python manage.py migrate --run-syncdb
```

### Create Superuser if Forgotten
```bash
python manage.py changepassword admin
```

## Frontend Integration

For Angular integration with this backend:

1. **API Base URL**: `http://localhost:8000/api/`
2. **CORS Configuration**: You may need to install django-cors-headers:
   ```bash
   pip install django-cors-headers
   ```
   Then add to INSTALLED_APPS and MIDDLEWARE in settings.py

3. **Example Angular Service**:
```typescript
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = 'http://localhost:8000/api';

  constructor(private http: HttpClient) {}

  getProducts() {
    return this.http.get(`${this.apiUrl}/products/`);
  }

  getProduct(id: number) {
    return this.http.get(`${this.apiUrl}/products/${id}/`);
  }

  getCategories() {
    return this.http.get(`${this.apiUrl}/categories/`);
  }
}
```

## Next Steps (Future Enhancements)

- Add authentication (JWT tokens)
- Implement filtering and pagination
- Add product image support
- Create POST/PUT/DELETE endpoints
- Add API documentation (Swagger/OpenAPI)
- Implement caching
- Add rate limiting
- Deploy to production server

## Security Notes

**⚠️ For Development Only**: The current settings are not suitable for production:
- DEBUG = True (disable in production)
- SECRET_KEY is hardcoded (use environment variables)
- ALLOWED_HOSTS = ['*'] (restrict in production)
- CSRF protection should be configured properly

## Resources

- [Django Documentation](https://docs.djangoproject.com/)
- [Django Models](https://docs.djangoproject.com/en/4.2/topics/db/models/)
- [Django Views](https://docs.djangoproject.com/en/4.2/topics/http/views/)
- [Django URL Dispatcher](https://docs.djangoproject.com/en/4.2/topics/http/urls/)
- [Django Admin](https://docs.djangoproject.com/en/4.2/ref/contrib/admin/)

---

**Lab 8 Submission**: Complete Django backend ready for GitHub. Implements all 5 required API endpoints with proper models and database structure.
