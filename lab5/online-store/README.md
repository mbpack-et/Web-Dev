# Online Store - Lab 5: Components & Interaction

A comprehensive Angular 17+ application demonstrating component-based architecture, parent-child communication, and interactive user features.

## Project Overview

This Online Store project extends Lab 4 by introducing:
- **Category-based product hierarchy** (4 categories with 5 products each = 20 total)
- **Component decomposition** into 3 main components with clear responsibilities
- **Parent-child communication** using Angular's `input()` and `output()` functions
- **Interactive features**: likes, product deletion, category switching, and social sharing

## Learning Objectives

By completing this project, you will understand:
- ✅ Organizing data into hierarchical structures
- ✅ Decomposing UIs into focused Angular components
- ✅ Passing data from parent to child using `input()`
- ✅ Emitting events from child to parent using `output()`
- ✅ Dynamic rendering based on user selection
- ✅ Component lifecycle hooks
- ✅ Clean separation of concerns

## Architecture

### Component Hierarchy

```
AppComponent (Root)
├── ProductListComponent
│   └── ProductItemComponent (Multiple instances)
```

### Data Flow

**Down**: Parent → Child via `input()`  
**Up**: Child → Parent via `output()` / EventEmitter

## Project Structure

```
online-store/
├── src/
│   ├── app/
│   │   ├── components/
│   │   │   ├── product-item/          # Displays single product with actions
│   │   │   │   ├── product-item.component.ts
│   │   │   │   ├── product-item.component.html
│   │   │   │   └── product-item.component.css
│   │   │   └── product-list/          # Renders list of ProductItemComponents
│   │   │       ├── product-list.component.ts
│   │   │       ├── product-list.component.html
│   │   │       └── product-list.component.css
│   │   ├── models/                    # TypeScript interfaces
│   │   │   ├── category.model.ts
│   │   │   ├── product.model.ts
│   │   │   └── index.ts
│   │   ├── services/                  # Data management
│   │   │   └── product.service.ts
│   │   ├── app.component.ts           # Root component with category selection
│   │   ├── app.component.html
│   │   └── app.component.css
│   ├── main.ts                         # Application bootstrap
│   ├── index.html
│   └── styles.css                     # Global styles
├── angular.json                        # Angular CLI configuration
├── tsconfig.json                       # TypeScript configuration
├── tsconfig.app.json
├── tsconfig.spec.json
├── package.json
├── .gitignore
└── README.md
```

## Features

### 1. Category Management
- 4 distinct product categories: Smartphones, Laptops, Headphones, Tablets
- Category selection via sidebar buttons
- Visual indication of active category
- Responsive category button grid

### 2. Product Display
- Products grouped by category (5 per category = 20 total)
- Responsive grid layout using CSS Grid
- Product cards with image, name, description, rating, price
- All products linked to real Kaspi.kz items

### 3. Interactive Features

#### Like Functionality
- Click "❤ Like" button to increment product's like count
- Like count displayed on each product card
- Immediate UI update on interaction

#### Delete Functionality
- Trash icon button to remove products
- Confirmation dialog before deletion
- Dynamic UI update after removal
- "No products" message when all products in category are deleted

#### Share Functionality
- WhatsApp share button with product details
- Telegram share button
- Direct links to Kaspi.kz for purchase

### 4. Dynamic Rendering
- `@if` / `@else` for conditional content
- `@for` with `track` for efficient list rendering
- Empty state messaging
- Welcome screen with feature overview

## Key Components

### AppComponent
**Role**: Root component and navigation hub
- Displays category sidebar
- Tracks selected category
- Passes filtered products to ProductListComponent
- Shows welcome screen when no category selected

**Inputs**: None (root)  
**Outputs**: None (handles internal state)

### ProductListComponent
**Role**: List container
- Receives array of products
- Renders ProductItemComponent for each product
- Listens for delete events from children
- Displays empty state message

**Inputs**: 
```typescript
products = input<Product[]>([])
```
**Outputs**:
```typescript
productDeleted = output<number>()
```

### ProductItemComponent
**Role**: Individual product display with actions
- Displays product details and image
- Handles like button clicks
- Emits delete event to parent
- Manages social sharing

**Inputs**:
```typescript
product = input.required<Product>()
```
**Outputs**:
```typescript
delete = output<number>()
```

## Data Models

### Category
```typescript
interface Category {
  id: number;
  name: string;
}
```

### Product
```typescript
interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  rating: number;
  image: string;
  categoryId: number;
  likes: number;
  kaspiUrl: string;
}
```

## Angular 17+ Features Used

- **Standalone Components**: All components are standalone (no NgModule)
- **Signals**: `signal()` for reactive state management
- **Input/Output**: `input()` and `output()` functions (new syntax)
- **Control Flow**: `@if`, `@else`, `@for` (new syntax)
- **Event Binding**: `(click)`, `(delete)` bindings

## Setup Instructions

### Prerequisites
- Node.js 18.x or higher
- npm 9.x or higher
- Angular CLI 17.x

### Installation

1. **Navigate to project directory**:
```bash
cd lab5/online-store
```

2. **Install dependencies**:
```bash
npm install
```

3. **Start development server**:
```bash
ng serve
```

4. **Open in browser**:
Navigate to `http://localhost:4200`

### Build for Production

```bash
ng build --configuration production
```

Output will be in `dist/online-store/`

## Usage

1. **Select a Category**: Click any category button in the sidebar
2. **Like Products**: Click the "❤ Like" button to increment the like count
3. **Delete Products**: Click the "🗑" button to remove a product (with confirmation)
4. **Share Products**:
   - Click "📱 WhatsApp" to share on WhatsApp
   - Click "✈ Telegram" to share on Telegram
5. **View on Kaspi.kz**: Click the yellow button to view product on Kaspi.kz

## Styling

- **Approach**: Component-scoped CSS with global styles
- **Layout**: Flexbox and CSS Grid for responsive design
- **Breakpoints**:
  - Desktop: 1024px+
  - Tablet: 768px - 1023px
  - Mobile: < 768px
- **Color Scheme**: Purple/blue gradient header with clean white cards

## Code Quality

- ✅ TypeScript strict mode enabled
- ✅ No use of `any` type
- ✅ Meaningful variable and function names
- ✅ Clear component responsibilities
- ✅ Proper input validation with `input.required()`
- ✅ Event emission for upward communication
- ✅ Responsive mobile-first design

## Learning Resources

- [Angular Components Guide](https://angular.dev/guide/components)
- [Component Inputs](https://angular.dev/guide/components/inputs)
- [Component Outputs](https://angular.dev/guide/components/outputs)
- [Angular Control Flow](https://angular.dev/guide/templates/control-flow)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/handbook/)

## Git Repository

### To initialize Git and push to GitHub:

1. **Initialize repository**:
```bash
git init
git add .
git commit -m "Initial commit: Lab 5 Online Store"
```

2. **Add remote**:
```bash
git remote add origin <YOUR_GITHUB_REPO_URL>
git branch -M main
git push -u origin main
```

3. **Verify .gitignore**:
Ensure `node_modules/` and `dist/` are ignored (already configured)

## Testing

To run unit tests:
```bash
ng test
```

## Troubleshooting

### Port 4200 Already in Use
```bash
ng serve --port 4300
```

### Module Not Found Errors
```bash
npm install
rm -rf node_modules/.angular  # On Windows: rmdir /s /q node_modules\.angular
ng cache clean
```

### Build Size Too Large
Already configured with appropriate budgets in `angular.json`

## Author Notes

This project demonstrates professional Angular development practices:
- Component-based architecture for scalability
- Proper separation of concerns
- Reactive state management with signals
- Responsive, accessible UI design
- Real-world data integration (Kaspi.kz products)

## Future Enhancements

Possible extensions for advanced learning:
- Add product search/filter functionality
- Implement persistent likes with localStorage
- Add shopping cart feature
- Create product detail view
- Add authentication system
- Integrate real API backend
- Add animations and transitions
- Implement unit tests

---

**Lab 5 Submission**: All code is ready for upload to your GitHub repository. Follows Angular 17+ best practices and all assignment requirements.
