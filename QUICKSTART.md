# Quick Start Guide

## ⚡ 5-Minute Setup

### 1. Prerequisites Check
- Node.js installed? `node --version`
- Docker installed? `docker --version`
- npm installed? `npm --version`

### 2. Clone & Install
```bash
# Clone repository
git clone <repository-url>
cd ecommerce-backend

# Install dependencies
npm install
```

### 3. Configure Environment
```bash
# Copy and configure environment file
cp .env.example .env

# Edit .env with your settings (or use defaults for local dev)
# nano .env
```

### 4. Start Services
```bash
# Start MongoDB, MySQL, Redis with Docker
docker-compose up -d

# Wait for services to initialize (30-60 seconds)
docker-compose ps
```

### 5. Seed Database
```bash
npm run seed
```

### 6. Start Server
```bash
npm run dev
```

✅ **Server is running on `http://localhost:3000`**

---

## 📚 Test the API

### Health Check
```bash
curl http://localhost:3000/health
```

### Register User
```bash
curl -X POST http://localhost:3000/api/auth/register \
  -H "Content-Type: application/json" \
  -d '{
    "firstName": "John",
    "lastName": "Doe",
    "email": "john@example.com",
    "password": "John@123",
    "passwordConfirm": "John@123"
  }'
```

### Login
```bash
curl -X POST http://localhost:3000/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{
    "email": "john@example.com",
    "password": "John@123"
  }'
```

### Get Products
```bash
curl http://localhost:3000/api/products
```

### Get Current User (requires token)
```bash
curl -X GET http://localhost:3000/api/auth/me \
  -H "Authorization: Bearer YOUR_TOKEN_HERE"
```

---

## 🧪 Test Credentials

After running `npm run seed`:

| Role | Email | Password |
|------|-------|----------|
| Admin | admin@ecommerce.com | Admin@123 |
| Customer | john@ecommerce.com | John@123 |
| Vendor | vendor@ecommerce.com | Vendor@123 |

---

## 🔍 Access Points

| Service | URL |
|---------|-----|
| API Server | http://localhost:3000 |
| MongoDB | mongodb://localhost:27017 |
| MySQL | mysql://localhost:3306 |
| Redis | redis://localhost:6379 |

---

## 📝 Common Commands

```bash
# Development
npm run dev              # Start with auto-reload

# Production
npm start                # Start server

# Testing
npm test                 # Run tests
npm run test:watch      # Watch mode
npm run test:coverage   # Coverage report

# Database
npm run seed            # Seed sample data

# Code Quality
npm run lint            # Check code style
npm run lint:fix        # Fix code style issues

# Docker
docker-compose up -d    # Start all services
docker-compose down     # Stop all services
docker-compose logs -f  # View logs
```

---

## 🐛 Troubleshooting

### Port 3000 Already in Use
```bash
# Find process on port 3000
lsof -i :3000

# Kill it
kill -9 <PID>
```

### Database Connection Failed
```bash
# Check if Docker containers are running
docker-compose ps

# Restart services
docker-compose restart
```

### Module Not Found
```bash
# Reinstall dependencies
rm -rf node_modules
npm install
```

### Cannot Connect to MongoDB
```bash
# Check MongoDB is running
docker logs ecommerce_mongodb

# Verify credentials in .env
# Default: mongodb://admin:password@localhost:27017/ecommerce?authSource=admin
```

---

## 📚 Documentation

- **[Full API Documentation](./src/docs/API.md)** - Complete API endpoints
- **[Architecture Guide](./src/docs/architecture/ARCHITECTURE.md)** - System design
- **[Deployment Guide](./src/docs/DEPLOYMENT.md)** - Production deployment
- **[README](./README.md)** - Complete project documentation

---

## 🚀 Next Steps

1. **Explore API** - Use Postman or Insomnia with provided credentials
2. **Read Documentation** - Understand the architecture
3. **Customize** - Modify configuration and add your features
4. **Deploy** - Follow deployment guide for production

---

## 💡 Tips

- Use Postman/Insomnia for testing API
- Check logs in `./logs` directory
- Use VS Code REST Client extension for quick API testing
- MongoDB Compass for GUI database management
- TablePlus for MySQL visualization

---

## 🆘 Need Help?

1. Check logs: `docker-compose logs -f app`
2. Review [API Documentation](./src/docs/API.md)
3. Check [Troubleshooting section](#-troubleshooting)
4. Open an issue on GitHub

---

**Happy coding! 🎉**
