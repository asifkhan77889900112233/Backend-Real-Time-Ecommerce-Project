# How to Run the E-Commerce Backend Project

## 📋 Prerequisites

Before running the project, make sure you have installed:

1. **Node.js** (v14 or higher)
   - Download from: https://nodejs.org/
   - Verify: `node --version` and `npm --version`

2. **Git** (optional, for version control)

3. **Databases** (optional, for full functionality):
   - MongoDB 4.0+
   - MySQL 5.7+
   - Redis 5.0+

> **Note:** The project will run without databases in demo mode with graceful error handling.

---

## 🚀 Quick Start (Development Mode)

### Step 1: Navigate to Project Directory
```bash
cd "c:\Users\asifk\Downloads\Ecommerce Backend\ecommerce-backend"
```

### Step 2: Add Node.js to PATH (Windows PowerShell)
```powershell
$env:Path += ";C:\Program Files\nodejs"
```

### Step 3: Install Dependencies
```bash
npm install
```

### Step 4: Start Development Server
```bash
npm run dev
```

**Expected Output:**
```
[INFO] 🚀 Server is running on port 3000
[INFO] 📍 Environment: development
[INFO] 📝 Base URL: http://localhost:3000
```

The server will restart automatically when you save file changes (nodemon is watching).

---

## 📦 Available Commands

### Development Mode (Recommended)
```bash
npm run dev
```
- Starts server with nodemon (auto-restart on file changes)
- Port: 3000
- Includes all debugging info

### Production Mode
```bash
npm start
```
- Runs the server without auto-restart
- Optimized for production
- Port: 3000

### Run Tests
```bash
npm test
```
- Runs Jest unit and integration tests
- Generates coverage reports

### Seed Database (Optional)
```bash
npm run seed
```
- Populates database with sample data
- Only works if MongoDB/MySQL is running

### Lint Code
```bash
npm run lint
```
- Checks code for errors using ESLint

---

## 🌐 Testing the API

### Using Browser
Simply visit: `http://localhost:3000`

### Using cURL (Command Line)

**1. Register a New User:**
```bash
curl -X POST http://localhost:3000/api/auth/register \
  -H "Content-Type: application/json" \
  -d '{
    "firstName": "John",
    "lastName": "Doe",
    "email": "john@example.com",
    "password": "password123"
  }'
```

**2. Login User:**
```bash
curl -X POST http://localhost:3000/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{
    "email": "john@example.com",
    "password": "password123"
  }'
```

**3. Get All Products:**
```bash
curl http://localhost:3000/api/products
```

**4. Get Product by ID:**
```bash
curl http://localhost:3000/api/products/1
```

**5. Get Current User (Protected Route):**
```bash
curl -X GET http://localhost:3000/api/auth/me \
  -H "Authorization: Bearer YOUR_JWT_TOKEN"
```

### Using Postman

1. Download Postman: https://www.postman.com/downloads/
2. Import API endpoints
3. Set up environment variables:
   - Base URL: `http://localhost:3000`
   - JWT Token: Copy from login response
4. Test all endpoints

---

## 🗄️ Database Setup (Optional)

### MongoDB Setup
```bash
# Using Docker
docker run -d -p 27017:27017 --name mongodb mongo:7

# Or install locally from: https://www.mongodb.com/try/download/community
```

### MySQL Setup
```bash
# Using Docker
docker run -d -p 3306:3306 --name mysql -e MYSQL_ROOT_PASSWORD=password mysql:8

# Or install locally from: https://www.mysql.com/downloads/
```

### Redis Setup
```bash
# Using Docker
docker run -d -p 6379:6379 --name redis redis:7

# Or install locally from: https://redis.io/download
```

---

## 🔧 Environment Variables

Create a `.env` file in the project root:

```env
# Server
PORT=3000
NODE_ENV=development

# MongoDB
MONGODB_URI=mongodb://admin:password@localhost:27017/ecommerce?authSource=admin

# MySQL
MYSQL_HOST=localhost
MYSQL_PORT=3306
MYSQL_USER=root
MYSQL_PASSWORD=password
MYSQL_DATABASE=ecommerce

# Redis
REDIS_HOST=localhost
REDIS_PORT=6379
REDIS_PASSWORD=

# JWT
JWT_SECRET=your_super_secret_jwt_key_change_this
JWT_EXPIRY=7d

# Email (for notifications)
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_USER=your_email@gmail.com
EMAIL_PASSWORD=your_app_password

# Payment Gateway (Stripe)
STRIPE_SECRET_KEY=sk_test_your_key
STRIPE_PUBLIC_KEY=pk_test_your_key

# AWS S3 (for file uploads)
AWS_ACCESS_KEY_ID=your_key
AWS_SECRET_ACCESS_KEY=your_secret
AWS_REGION=us-east-1
AWS_BUCKET_NAME=ecommerce-bucket
```

---

## 📁 Project Structure

```
ecommerce-backend/
├── src/
│   ├── app.js              # Express app setup
│   ├── index.js            # Server entry point
│   ├── config/             # Configuration files
│   ├── loaders/            # Database & service loaders
│   ├── middleware/         # Custom middleware
│   ├── modules/            # Feature modules (11 modules)
│   │   ├── auth/           # Authentication
│   │   ├── user/           # User management
│   │   ├── product/        # Product catalog
│   │   ├── cart/           # Shopping cart
│   │   ├── order/          # Order processing
│   │   ├── payment/        # Payment handling
│   │   ├── shipping/       # Shipping management
│   │   ├── review/         # Product reviews
│   │   ├── category/       # Product categories
│   │   ├── inventory/      # Stock tracking
│   │   └── analytics/      # Sales analytics
│   ├── utils/              # Utility functions
│   └── cron/               # Scheduled jobs
├── tests/                  # Test files
├── docker-compose.yml      # Docker services
├── package.json            # Dependencies
└── README.md              # Project documentation
```

---

## 🐳 Using Docker (Full Setup)

### Prerequisites
- Install Docker Desktop: https://www.docker.com/products/docker-desktop

### Run with Docker Compose
```bash
docker-compose up -d
```

This will start:
- Node.js API (port 3000)
- MongoDB (port 27017)
- MySQL (port 3306)
- Redis (port 6379)

### Stop Services
```bash
docker-compose down
```

### View Logs
```bash
docker-compose logs -f api
```

---

## 🐛 Troubleshooting

### Problem: Port 3000 Already in Use
```bash
# Kill process using port 3000
netstat -ano | findstr :3000
taskkill /PID <PID> /F
```

### Problem: Node.js Command Not Found
```bash
# Add Node.js to PATH
$env:Path += ";C:\Program Files\nodejs"
```

### Problem: npm install Fails
```bash
# Clear npm cache
npm cache clean --force

# Try install again
npm install
```

### Problem: MongoDB Connection Refused
```bash
# MongoDB is not running - either:
# 1. Start MongoDB locally
# 2. Use Docker: docker run -d -p 27017:27017 mongo
# 3. The app will continue without database (demo mode)
```

### Problem: EACCES Permission Error
```bash
# On macOS/Linux, use sudo
sudo npm install
sudo npm run dev
```

---

## 📚 API Documentation

**Full API Documentation:** See [API.md](./docs/api/API.md)

**Key Endpoints:**

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/auth/register` | Register new user |
| POST | `/api/auth/login` | Login user |
| GET | `/api/auth/me` | Get current user |
| GET | `/api/products` | Get all products |
| GET | `/api/products/:id` | Get product by ID |
| GET | `/api/cart` | Get user's cart |
| POST | `/api/orders` | Create order |
| GET | `/api/orders` | Get user's orders |

---

## ✅ Verification Checklist

After starting the server, verify:

- [ ] Server running on port 3000
- [ ] All loaders initialized successfully
- [ ] No critical errors in console
- [ ] Can access health endpoint: `GET http://localhost:3000/health`
- [ ] MongoDB connection warning (expected if not installed)
- [ ] MySQL connection warning (expected if not installed)
- [ ] Can test API endpoints with cURL or Postman

---

## 📞 Support

For issues or questions:
1. Check the [README.md](./README.md) for architecture overview
2. Review [ARCHITECTURE.md](./docs/architecture/ARCHITECTURE.md)
3. Check [QUICKSTART.md](./QUICKSTART.md) for quick reference
4. Review error logs in console

---

## 🎯 Next Steps

1. **Test API Endpoints:** Use Postman or cURL to test all endpoints
2. **Set Up Databases:** Install MongoDB, MySQL, Redis for full functionality
3. **Configure Environment:** Update `.env` file with your settings
4. **Run Tests:** Execute `npm test` to verify everything works
5. **Deploy:** Use Docker Compose for production deployment

Happy coding! 🚀
