# E-Commerce Backend API

A professional, scalable e-commerce backend built with Node.js, Express, MongoDB, MySQL, and Redis.

## 📁 Project Structure

```
ecommerce-backend/
├── src/
│   ├── config/              # Configuration files
│   │   ├── constants.js     # App constants
│   │   └── database.js      # Database configuration
│   ├── loaders/             # Express, Database, Redis loaders
│   ├── utils/               # Utility functions & loggers
│   │   ├── logger/          # Logging utilities
│   │   ├── email/           # Email service
│   │   ├── validation/      # Validation schemas
│   │   └── response.js      # Response formatters
│   ├── middleware/          # Express middleware
│   │   ├── auth.js          # JWT authentication
│   │   ├── role.js          # Role-based access control
│   │   ├── validation.js    # Request validation
│   │   └── errorHandler.js  # Error handling
│   ├── modules/             # Feature modules
│   │   ├── auth/            # Authentication (register, login)
│   │   ├── user/            # User management
│   │   ├── product/         # Product catalog
│   │   ├── category/        # Product categories
│   │   ├── cart/            # Shopping cart
│   │   ├── order/           # Order management
│   │   ├── payment/         # Payment processing
│   │   ├── shipping/        # Shipping providers
│   │   ├── review/          # Product reviews
│   │   ├── inventory/       # Inventory management
│   │   └── analytics/       # Sales analytics
│   ├── database/            # Database schemas & migrations
│   ├── cron/                # Scheduled jobs
│   ├── docs/                # API documentation
│   ├── app.js               # Express app setup
│   └── index.js             # Entry point
├── tests/                   # Test files
├── scripts/                 # Utility scripts
├── package.json
├── .env.example
├── docker-compose.yml
├── .gitignore
└── README.md
```

## 🚀 Features

### Core Features
- **Authentication & Authorization** - JWT-based auth with role management
- **User Management** - User profiles, roles, and permissions
- **Product Management** - Catalog with categories and specifications
- **Shopping Cart** - Add/remove items, cart management
- **Orders** - Order creation, tracking, and management
- **Payment Gateway Integration** - Stripe, PayPal, JazzCash, COD
- **Shipping Management** - Multiple shipping providers (DHL, TCS, Leopard)
- **Inventory Management** - Real-time stock tracking and movements
- **Product Reviews** - User reviews and ratings
- **Analytics** - Sales reports and dashboard statistics
- **3D Product Models** - Support for 3D model uploads and processing
- **Cron Jobs** - Automated tasks (order cancellation, inventory sync, etc.)

### Technical Features
- **Multi-Database Support** - MongoDB (primary), MySQL (optional), Redis (caching)
- **Rate Limiting** - API rate limiting and protection
- **File Upload** - AWS S3 integration for media storage
- **Email Notifications** - Order confirmations, shipping updates
- **Logging** - Comprehensive logging system
- **Error Handling** - Centralized error handling middleware
- **CORS Support** - Cross-origin resource sharing
- **Security** - Helmet, JWT, bcrypt password hashing

## 📦 Installation

### Prerequisites
- Node.js (v14+)
- MongoDB
- MySQL (optional)
- Redis (optional)
- Docker & Docker Compose (for containerized setup)

### Setup Steps

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd ecommerce-backend
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env
   ```
   Edit `.env` with your configuration:
   - Database credentials
   - JWT secrets
   - Payment gateway keys
   - Email configuration
   - AWS S3 credentials

4. **Start databases with Docker**
   ```bash
   docker-compose up -d
   ```

5. **Start the development server**
   ```bash
   npm run dev
   ```

   The server will start on `http://localhost:3000`

## 🔧 Scripts

```bash
# Start production server
npm start

# Start development server with auto-reload
npm run dev

# Run tests
npm test

# Run tests in watch mode
npm run test:watch

# Seed database with sample data
npm run seed
```

## 🌍 API Endpoints

### Health Check
```
GET /health
```

### Authentication
```
POST   /api/auth/register         # Register new user
POST   /api/auth/login            # Login user
GET    /api/auth/me               # Get current user
PUT    /api/auth/profile          # Update user profile
```

### Users
```
GET    /api/users                 # Get all users
GET    /api/users/:id             # Get user by ID
PUT    /api/users/:id             # Update user
DELETE /api/users/:id             # Delete user
```

### Products
```
GET    /api/products              # Get all products
GET    /api/products/:id          # Get product details
POST   /api/products              # Create product (Admin)
PUT    /api/products/:id          # Update product (Admin)
DELETE /api/products/:id          # Delete product (Admin)
```

### Categories
```
GET    /api/categories            # Get all categories
POST   /api/categories            # Create category (Admin)
PUT    /api/categories/:id        # Update category (Admin)
DELETE /api/categories/:id        # Delete category (Admin)
```

### Cart
```
GET    /api/cart                  # Get user's cart
POST   /api/cart/add              # Add item to cart
POST   /api/cart/remove/:id       # Remove item from cart
DELETE /api/cart                  # Clear cart
```

### Orders
```
GET    /api/orders                # Get user's orders
GET    /api/orders/:id            # Get order details
POST   /api/orders                # Create order
PUT    /api/orders/:id            # Update order
POST   /api/orders/:id/cancel     # Cancel order
```

### Payments
```
GET    /api/payments              # Get user's payments
POST   /api/payments              # Create payment
POST   /api/payments/process/:id  # Process payment
POST   /api/payments/:id/refund   # Refund payment
```

### Shipping
```
GET    /api/shipping/providers    # Get shipping providers
GET    /api/shipping/track/:no    # Track shipment
POST   /api/shipping/calculate    # Calculate shipping cost
```

### Reviews
```
GET    /api/reviews/product/:id   # Get product reviews
POST   /api/reviews               # Create review
PUT    /api/reviews/:id           # Update review
DELETE /api/reviews/:id           # Delete review
```

### Inventory
```
GET    /api/inventory/product/:id # Get product inventory
PUT    /api/inventory/:id         # Update inventory
POST   /api/inventory/:id/movement# Record inventory movement
GET    /api/inventory             # Get low stock items
```

### Analytics
```
GET    /api/analytics/dashboard   # Dashboard statistics
GET    /api/analytics/sales       # Sales report
GET    /api/analytics/top-products# Top selling products
```

## 🔐 Authentication

All protected endpoints require a JWT token in the Authorization header:

```
Authorization: Bearer <token>
```

To get a token:
1. Register a new user: `POST /api/auth/register`
2. Login: `POST /api/auth/login`
3. Use the returned `token` in subsequent requests

## 🗄️ Database

### MongoDB Collections
- **Users** - User accounts and profiles
- **Products** - Product information
- **Categories** - Product categories
- **Orders** - Customer orders
- **Cart** - Shopping carts
- **Payments** - Payment records
- **Reviews** - Product reviews
- **Inventory** - Stock information

### MongoDB Indexes
- User email (unique)
- Product SKU (unique)
- Product category and status
- Order user and status
- Review product and status

## 📧 Email Configuration

Configure SMTP settings in `.env`:
```
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASSWORD=your-app-password
SMTP_FROM=noreply@ecommerce.com
```

Automated emails are sent for:
- User registration
- Order confirmation
- Shipment notifications
- Password reset
- Order cancellation

## 🔄 Cron Jobs

Automated tasks running on schedule:
- **Hourly**: Cancel pending orders (24+ hours old)
- **Daily 6 AM**: Check low stock items
- **Daily 10 PM**: Generate daily sales report
- **Daily 3 AM**: Sync inventory from warehouse

## 🧪 Testing

```bash
# Run all tests
npm test

# Run tests with coverage
npm test -- --coverage

# Run specific test file
npm test -- tests/unit/auth.test.js
```

## 📚 API Documentation

See [API.md](./src/docs/API.md) for detailed API documentation with request/response examples.

## 🐳 Docker

Start all services with Docker Compose:

```bash
docker-compose up -d
```

Services:
- **MongoDB** - Port 27017
- **MySQL** - Port 3306
- **Redis** - Port 6379
- **Application** - Port 3000

## 🛡️ Security

- JWT token-based authentication
- Password hashing with bcryptjs
- CORS protection
- Helmet security headers
- Rate limiting
- Input validation with Joi
- SQL injection prevention
- XSS protection

## 📝 Environment Variables

Key environment variables (see `.env.example` for complete list):

```
NODE_ENV=development
PORT=3000

# Databases
MONGODB_URI=mongodb://admin:password@localhost:27017/ecommerce?authSource=admin
MYSQL_HOST=localhost
REDIS_HOST=localhost

# JWT
JWT_SECRET=your_secret_key
JWT_EXPIRATION=7d

# Payment Gateways
STRIPE_API_KEY=sk_test_...
PAYPAL_CLIENT_ID=...

# AWS S3
AWS_ACCESS_KEY_ID=...
AWS_SECRET_ACCESS_KEY=...

# Email
SMTP_HOST=smtp.gmail.com
SMTP_USER=your-email@gmail.com
```

## 🚀 Deployment

### Production Checklist
1. Update all environment variables
2. Set `NODE_ENV=production`
3. Use strong JWT secrets
4. Enable SSL/TLS
5. Configure backup strategy
6. Set up monitoring and logging
7. Use environment-specific database
8. Configure CDN for static files

### Deployment Options
- AWS EC2 + RDS
- Heroku
- DigitalOcean
- Google Cloud Platform
- Docker on Kubernetes

## 📊 Performance

- Database indexing for fast queries
- Redis caching layer
- Pagination on list endpoints
- Response compression
- Connection pooling

## 🐛 Troubleshooting

### MongoDB Connection Issues
```bash
# Check MongoDB is running
docker-compose logs mongodb

# Verify connection string in .env
```

### Port Already in Use
```bash
# Find process using port 3000
lsof -i :3000

# Kill process
kill -9 <PID>
```

### Module Not Found
```bash
# Reinstall dependencies
rm -rf node_modules package-lock.json
npm install
```

## 📄 License

ISC

## 👥 Contributors

- Asif Khan (Lead Developer)

## 📞 Support

For issues and questions, please open an issue on GitHub.

## 🔗 Related Links

- [API Documentation](./src/docs/API.md)
- [Architecture Guide](./src/docs/architecture/README.md)
- [Database Schema](./src/database/README.md)

---

**Last Updated**: January 2024
**Version**: 1.0.0

npm run dev

# Start production server
npm start
```

## 🛠️ Technology Stack

- **Runtime**: Node.js
- **Framework**: Express.js
- **Databases**: MongoDB, MySQL
- **Cache**: Redis
- **Authentication**: JWT
- **File Storage**: AWS S3
- **Payment**: Stripe, PayPal, JazzCash
- **Testing**: Jest, Supertest
- **Logging**: Morgan, Winston

## 📚 API Endpoints

### Auth Module
- `POST /api/auth/register` - Register new user
- `POST /api/auth/login` - User login
- `POST /api/auth/logout` - User logout

### Product Module
- `GET /api/products` - Get all products
- `POST /api/products` - Create product
- `PUT /api/products/:id` - Update product
- `DELETE /api/products/:id` - Delete product

### Order Module
- `POST /api/orders` - Create order
- `GET /api/orders/:id` - Get order details
- `PUT /api/orders/:id` - Update order status

### More endpoints in respective modules...

## 🧪 Testing

```bash
# Run all tests
npm test

# Watch mode
npm run test:watch

# Coverage
npm run test:coverage
```

## 🐳 Docker Setup

```bash
docker-compose up -d
```

## 📝 Environment Variables

See `.env` file for all required environment variables.

## 🔐 Security

- Helmet.js for HTTP headers
- CORS configured
- Rate limiting enabled
- JWT token validation
- Password hashing with bcrypt
- Input validation with Joi

## 🤝 Contributing

1. Create a feature branch
2. Make your changes
3. Submit a pull request

## 📄 License

ISC
