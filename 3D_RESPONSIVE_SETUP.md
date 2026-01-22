# 🎨 E-Commerce Backend API - 3D Modern Responsive Edition

> Professional E-Commerce Backend with 3D Design, Responsive Layout, and Full API Documentation

## ✨ Features

### 🎯 Design & UX
- **3D Modern Design** - Glassmorphism, smooth animations, 3D transforms
- **Fully Responsive** - Mobile-first approach with 6 breakpoints
- **Modern Colors** - Indigo, Purple, Pink gradient palette
- **Smooth Animations** - fadeIn, slideIn, pulse3d, float, glow effects
- **Accessible** - WCAG 2.1 AA compliant

### 🔐 Security & Authentication
- **JWT Authentication** - Secure token-based authentication
- **Role-Based Access Control** - Admin, Customer, Vendor, Support roles
- **Password Hashing** - bcryptjs encryption
- **Rate Limiting** - Prevent API abuse
- **Security Headers** - Helmet middleware

### 🛒 E-Commerce Features
- **Product Management** - Full CRUD operations
- **Shopping Cart** - Real-time cart management
- **Order Management** - Order tracking and status updates
- **Payment Integration** - Stripe, PayPal, JazzCash support
- **Shipping** - DHL, TCS, Leopard, Self Pickup
- **Reviews** - Product ratings and reviews
- **Inventory** - Stock management and tracking
- **Analytics** - Dashboard with sales analytics

### 💾 Database Support
- **MongoDB** - User, Product, Order data
- **MySQL** - Relational data with Sequelize ORM
- **Redis** - Caching and sessions

### 📊 API Documentation
- **Interactive Docs** - `/docs` endpoint
- **Swagger-like** - `/docs/endpoints` for all routes
- **Example Requests** - cURL examples included
- **Error Documentation** - Standardized error responses

---

## 🚀 Quick Start

### Prerequisites
```bash
- Node.js >= 14.0.0
- npm >= 6.0.0
- MongoDB >= 4.0
- Optional: Redis, MySQL
```

### Installation

1. **Clone the project**
```bash
cd ecommerce-backend
```

2. **Install dependencies**
```bash
npm install
```

3. **Configure environment**
```bash
# Copy and edit .env file
NODE_ENV=development
PORT=3000
MONGODB_URI=mongodb://localhost:27017/ecommerce
JWT_SECRET=your_secret_key_here
```

4. **Start MongoDB**
```bash
mongod
```

5. **Run the server**
```bash
npm start          # Production
npm run dev        # Development with nodemon
```

6. **Access the API**
```
http://localhost:3000
http://localhost:3000/docs
http://localhost:3000/docs/endpoints
```

---

## 🎨 3D Design System

### Color Palette
```javascript
Primary:      #6366f1 (Indigo)
Secondary:    #8b5cf6 (Violet)
Accent:       #ec4899 (Pink)
Success:      #10b981 (Emerald)
Warning:      #f59e0b (Amber)
Error:        #ef4444 (Red)
Background:   #0f172a (Dark Blue)
Surface:      #1e293b (Slate)
```

### Typography
```javascript
Font Family:  System fonts (-apple-system, BlinkMacSystemFont, 'Segoe UI')
Font Sizes:   xs(12px) → 5xl(48px)
Font Weights: 300, 400, 500, 600, 700, 800
Line Heights: 1.25, 1.5, 1.75, 2
```

### Responsive Breakpoints
```javascript
xs:   320px   (Mobile)
sm:   640px   (Mobile Large)
md:   768px   (Tablet)
lg:   1024px  (Tablet Large)
xl:   1280px  (Desktop)
2xl:  1536px  (Desktop Large)
```

### 3D Animations
```javascript
slideIn   - 0.3s ease-out (Left to right)
fadeIn    - 0.3s ease-out (Opacity)
pulse3d   - 2s infinite (Scale + opacity)
float     - 3s ease-in-out (Y-axis movement)
glow      - 2s ease-in-out (Box shadow)
```

---

## 📡 API Endpoints

### Health Check
```http
GET /health
```

### Documentation
```http
GET /docs                 # Full API documentation
GET /docs/endpoints       # All endpoints list
```

### Authentication
```http
POST   /api/auth/register         # Register new user
POST   /api/auth/login            # Login user
GET    /api/auth/me               # Get current user (protected)
PUT    /api/auth/profile          # Update profile (protected)
```

### Users
```http
GET    /api/users                 # Get all users (protected)
GET    /api/users/:id             # Get user by ID (protected)
```

### Products
```http
GET    /api/products              # Get all products
GET    /api/products/:id          # Get product details
POST   /api/products              # Create product (protected)
PUT    /api/products/:id          # Update product (protected)
DELETE /api/products/:id          # Delete product (protected)
```

### Shopping Cart
```http
GET    /api/cart                  # Get cart (protected)
POST   /api/cart/add              # Add to cart (protected)
DELETE /api/cart/remove/:productId # Remove from cart (protected)
```

### Orders
```http
GET    /api/orders                # Get user orders (protected)
POST   /api/orders                # Create order (protected)
GET    /api/orders/:id            # Get order details (protected)
```

### Payments
```http
GET    /api/payments              # Get payments (protected)
POST   /api/payments              # Create payment (protected)
```

### Categories
```http
GET    /api/categories            # Get all categories
```

### Reviews
```http
GET    /api/reviews/product/:id   # Get product reviews
POST   /api/reviews               # Create review (protected)
```

### Shipping
```http
GET    /api/shipping/providers    # Get shipping providers
```

### Inventory
```http
GET    /api/inventory/product/:id # Get product inventory
```

### Analytics
```http
GET    /api/analytics/dashboard   # Dashboard stats (protected)
```

---

## 🔑 Authentication

### JWT Token Format
```
Authorization: Bearer YOUR_JWT_TOKEN
```

### Example Login Request
```bash
curl -X POST http://localhost:3000/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{
    "email": "user@example.com",
    "password": "password123"
  }'
```

### Response
```json
{
  "success": true,
  "message": "Login successful",
  "data": {
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
    "user": {
      "id": "user_id",
      "email": "user@example.com",
      "name": "User Name"
    }
  }
}
```

---

## 🎨 Frontend Integration

### React Example
```javascript
import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'http://localhost:3000',
});

// Add token to requests
apiClient.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// Fetch products
const fetchProducts = async () => {
  const response = await apiClient.get('/api/products?page=1&limit=12');
  return response.data.data;
};
```

### Tailwind CSS Configuration
```javascript
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: '#6366f1',
        secondary: '#8b5cf6',
        accent: '#ec4899',
      },
      boxShadow: {
        '3d': '0 20px 25px -5px rgba(99, 102, 241, 0.2)',
      },
    },
  },
};
```

### Responsive Grid
```html
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
  <!-- Your cards here -->
</div>
```

---

## 📊 Response Format

### Success Response
```json
{
  "success": true,
  "message": "Success",
  "timestamp": "2026-01-21T21:54:27.000Z",
  "data": {},
  "meta": {
    "theme": "3D Modern Responsive",
    "styling": {
      "type": "glassmorphism",
      "animation": "smooth",
      "responsive": true
    }
  }
}
```

### Paginated Response
```json
{
  "success": true,
  "message": "Success",
  "data": [],
  "pagination": {
    "page": 1,
    "limit": 20,
    "total": 100,
    "pages": 5,
    "hasMore": true,
    "nextPage": 2,
    "prevPage": null
  }
}
```

### Error Response
```json
{
  "success": false,
  "message": "Error message",
  "timestamp": "2026-01-21T21:54:27.000Z",
  "error": null,
  "meta": {
    "theme": "3D Modern Responsive"
  }
}
```

---

## 🧪 Testing

```bash
# Run all tests
npm test

# Run tests in watch mode
npm run test:watch

# Generate coverage report
npm run test:coverage
```

---

## 🔧 Configuration Files

### `.env` Example
```env
NODE_ENV=development
PORT=3000
MONGODB_URI=mongodb://localhost:27017/ecommerce
MYSQL_HOST=localhost
REDIS_HOST=localhost
JWT_SECRET=your_secret_key
STRIPE_SECRET_KEY=sk_test_...
PAYPAL_CLIENT_ID=...
AWS_ACCESS_KEY_ID=...
EMAIL_USER=your_email@gmail.com
```

### `package.json` Scripts
```json
{
  "scripts": {
    "start": "node src/index.js",
    "dev": "nodemon src/index.js",
    "test": "jest --detectOpenHandles",
    "test:watch": "jest --watch",
    "test:coverage": "jest --coverage",
    "seed": "node scripts/seed.js",
    "lint": "eslint src",
    "lint:fix": "eslint src --fix"
  }
}
```

---

## 📁 Project Structure

```
ecommerce-backend/
├── src/
│   ├── app.js                    # Express app setup
│   ├── index.js                  # Server entry point
│   ├── config/
│   │   ├── constants.js          # App constants
│   │   ├── database.js           # DB config
│   │   ├── styling.js            # 3D styling config
│   │   └── frontendIntegration.js # Frontend guides
│   ├── loaders/
│   │   ├── express.js            # Express middleware
│   │   ├── mongodb.js            # MongoDB connection
│   │   ├── mysql.js              # MySQL connection
│   │   └── redis.js              # Redis connection
│   ├── middleware/
│   │   ├── auth.js               # JWT validation
│   │   ├── errorHandler.js       # Error handling
│   │   └── validation.js         # Input validation
│   ├── modules/
│   │   ├── auth/                 # Authentication
│   │   ├── users/                # User management
│   │   ├── products/             # Product catalog
│   │   ├── cart/                 # Shopping cart
│   │   ├── orders/               # Order management
│   │   ├── payments/             # Payments
│   │   ├── shipping/             # Shipping
│   │   ├── reviews/              # Reviews
│   │   ├── analytics/            # Analytics
│   │   └── docs/                 # API documentation
│   └── utils/
│       ├── response.js           # Response formatting
│       ├── modernResponse.js     # 3D responses
│       ├── logger/               # Logging
│       └── helpers.js            # Utilities
├── tests/
│   ├── unit/
│   ├── integration/
│   └── e2e/
├── .env                          # Environment variables
├── package.json                  # Dependencies
├── SETUP_GUIDE.js               # Setup documentation
└── README.md                     # This file
```

---

## 🐳 Docker Setup

```bash
# Build Docker image
docker build -t ecommerce-backend .

# Run with Docker Compose
docker-compose up

# Production
docker-compose -f docker-compose.prod.yml up
```

---

## 🚀 Deployment

### Heroku
```bash
heroku create ecommerce-backend
git push heroku main
heroku logs --tail
```

### AWS/Azure/DigitalOcean
- Use Docker container
- Configure environment variables
- Set up CI/CD pipeline

---

## 📝 License

ISC License - Created by Asif Khan

---

## 📞 Support

- **Documentation**: `/docs`
- **Email**: support@ecommerce.com
- **Issues**: GitHub Issues

---

## 🎯 What's Included

✅ Authentication & Authorization
✅ Product Management  
✅ Shopping Cart & Orders
✅ Payment Processing
✅ Shipping Integration
✅ Review System
✅ Inventory Management
✅ Analytics Dashboard
✅ Email Notifications
✅ 3D Modern Design System
✅ Responsive Layout (Mobile-first)
✅ API Documentation
✅ Error Handling
✅ Logging System
✅ Rate Limiting
✅ Input Validation
✅ Security Headers
✅ CORS Support
✅ MongoDB Integration
✅ MySQL Support
✅ Redis Caching
✅ Cron Jobs
✅ Docker Support
✅ Comprehensive Tests

---

## 🎨 3D & Responsive Design Highlights

### Modern UI Components
- **3D Buttons** with hover transform effects
- **Glassmorphism Cards** with blur effects
- **Responsive Grid** - 1col (mobile) → 4col (desktop)
- **Smooth Animations** - All transitions optimized
- **Dark Theme** with gradient accents
- **Accessibility First** - WCAG 2.1 AA compliant

### Responsive Breakpoints
```
Mobile:        320px - 640px  (1 column)
Tablet:        641px - 1024px (2 columns)
Desktop:       1025px+        (3-4 columns)
```

### Animation Library
- Fade In
- Slide In
- 3D Pulse
- Float
- Glow Effect

---

**Ready to go! 🚀 Your 3D Modern Responsive E-Commerce Backend is fully configured and running error-free!**
