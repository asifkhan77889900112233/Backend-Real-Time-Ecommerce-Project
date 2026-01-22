/**
 * Project Setup & Configuration Guide
 * 3D Modern Responsive E-Commerce Backend
 */

module.exports = {
  projectName: 'E-Commerce Backend API',
  version: '1.0.0',
  theme: '3D Modern Responsive Design',
  theme3D: {
    style: 'glassmorphism',
    colors: {
      primary: '#6366f1',
      secondary: '#8b5cf6',
      accent: '#ec4899',
    },
  },
  responsive: {
    breakpoints: {
      mobile: '320px-640px',
      tablet: '641px-1024px',
      desktop: '1025px+',
    },
  },

  // Installation Steps
  installation: {
    prerequisites: [
      'Node.js >= 14.0.0',
      'npm >= 6.0.0',
      'MongoDB >= 4.0',
      'Redis (optional)',
      'MySQL (optional)',
    ],
    steps: [
      '1. Clone or download the project',
      '2. cd ecommerce-backend',
      '3. npm install',
      '4. Configure .env file',
      '5. Start MongoDB: mongod',
      '6. Run: npm start',
    ],
  },

  // Environment Configuration
  environmentVariables: {
    required: [
      'NODE_ENV=development',
      'PORT=3000',
      'MONGODB_URI=mongodb://localhost:27017/ecommerce',
      'JWT_SECRET=your_jwt_secret_key',
    ],
    optional: [
      'MYSQL_HOST, MYSQL_USER, MYSQL_PASSWORD',
      'REDIS_HOST, REDIS_PORT',
      'STRIPE_SECRET_KEY',
      'AWS_ACCESS_KEY_ID',
    ],
  },

  // API Endpoints Structure
  apiStructure: {
    baseUrl: 'http://localhost:3000',
    prefix: '/api',
    routes: {
      health: {
        path: '/health',
        method: 'GET',
        description: 'Health check',
        auth: false,
      },
      docs: {
        path: '/docs',
        method: 'GET',
        description: 'API documentation',
        auth: false,
      },
      authentication: {
        register: { path: '/api/auth/register', method: 'POST', auth: false },
        login: { path: '/api/auth/login', method: 'POST', auth: false },
        getMe: { path: '/api/auth/me', method: 'GET', auth: true },
        updateProfile: { path: '/api/auth/profile', method: 'PUT', auth: true },
      },
      users: {
        getAll: { path: '/api/users', method: 'GET', auth: true },
        getById: { path: '/api/users/:id', method: 'GET', auth: true },
      },
      products: {
        getAll: { path: '/api/products', method: 'GET', auth: false },
        getById: { path: '/api/products/:id', method: 'GET', auth: false },
        create: { path: '/api/products', method: 'POST', auth: true },
        update: { path: '/api/products/:id', method: 'PUT', auth: true },
        delete: { path: '/api/products/:id', method: 'DELETE', auth: true },
      },
      categories: {
        getAll: { path: '/api/categories', method: 'GET', auth: false },
      },
      cart: {
        get: { path: '/api/cart', method: 'GET', auth: true },
        add: { path: '/api/cart/add', method: 'POST', auth: true },
        remove: { path: '/api/cart/remove/:productId', method: 'DELETE', auth: true },
      },
      orders: {
        getAll: { path: '/api/orders', method: 'GET', auth: true },
        create: { path: '/api/orders', method: 'POST', auth: true },
        getById: { path: '/api/orders/:id', method: 'GET', auth: true },
      },
      payments: {
        getAll: { path: '/api/payments', method: 'GET', auth: true },
        create: { path: '/api/payments', method: 'POST', auth: true },
      },
      shipping: {
        getProviders: { path: '/api/shipping/providers', method: 'GET', auth: false },
      },
      reviews: {
        getProduct: { path: '/api/reviews/product/:productId', method: 'GET', auth: false },
        create: { path: '/api/reviews', method: 'POST', auth: true },
      },
      inventory: {
        getProduct: { path: '/api/inventory/product/:productId', method: 'GET', auth: false },
      },
      analytics: {
        dashboard: { path: '/api/analytics/dashboard', method: 'GET', auth: true },
      },
    },
  },

  // 3D Design Components
  design3D: {
    buttons: {
      primary: {
        background: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)',
        shadow: '0 20px 25px -5px rgba(99, 102, 241, 0.2)',
        hover: {
          shadow: '0 25px 50px -12px rgba(99, 102, 241, 0.3)',
          transform: 'translateY(-2px)',
        },
      },
    },
    cards: {
      background: '#1e293b',
      border: '1px solid rgba(148, 163, 184, 0.1)',
      borderRadius: '1rem',
      shadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
      hover3D: {
        transform: 'perspective(1000px) rotateX(5deg) translateY(-5px)',
        shadow: '0 25px 50px -12px rgba(99, 102, 241, 0.2)',
      },
    },
    animations: [
      'fadeIn 0.3s ease-out',
      'slideIn 0.3s ease-out',
      'pulse3d 2s infinite',
      'float 3s ease-in-out infinite',
    ],
  },

  // Responsive Design
  responsiveDesign: {
    mobileFirst: true,
    breakpoints: {
      xs: '320px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
    },
    gridLayout: {
      mobile: '1 column',
      tablet: '2 columns',
      desktop: '3-4 columns',
    },
  },

  // Database Setup
  databases: {
    mongodb: {
      connection: 'mongodb://localhost:27017/ecommerce',
      usage: 'User profiles, Products, Orders, Reviews',
      collections: [
        'users',
        'products',
        'categories',
        'orders',
        'payments',
        'reviews',
        'carts',
      ],
    },
    mysql: {
      host: 'localhost',
      port: 3306,
      database: 'ecommerce',
      usage: 'Relational data with Sequelize ORM',
    },
    redis: {
      host: 'localhost',
      port: 6379,
      usage: 'Caching, Sessions',
    },
  },

  // Security Features
  security: {
    jwt: {
      algorithm: 'HS256',
      expiresIn: '7d',
      refreshExpiresIn: '30d',
    },
    passwordHashing: 'bcryptjs',
    helmet: 'Security headers',
    cors: 'Enabled',
    rateLimit: '100 requests per 15 minutes',
    validation: 'Joi schema validation',
  },

  // File Structure
  fileStructure: {
    root: {
      'src/': 'Source code',
      'tests/': 'Test files',
      'logs/': 'Application logs',
      'scripts/': 'Utility scripts',
      '.env': 'Environment variables',
      'package.json': 'Dependencies',
    },
    src: {
      'app.js': 'Express app setup',
      'index.js': 'Server entry point',
      'config/': 'Configuration files',
      'loaders/': 'Database loaders',
      'middleware/': 'Express middleware',
      'modules/': 'API modules',
      'utils/': 'Utility functions',
      'cron/': 'Scheduled tasks',
    },
    modules: {
      'auth/': 'Authentication',
      'users/': 'User management',
      'products/': 'Product catalog',
      'categories/': 'Product categories',
      'cart/': 'Shopping cart',
      'orders/': 'Order management',
      'payments/': 'Payment processing',
      'shipping/': 'Shipping integration',
      'reviews/': 'Product reviews',
      'inventory/': 'Stock management',
      'analytics/': 'Analytics',
      'docs/': 'API documentation',
    },
  },

  // NPM Scripts
  npmScripts: {
    'npm start': 'Start production server',
    'npm run dev': 'Start with nodemon (development)',
    'npm test': 'Run tests with Jest',
    'npm run seed': 'Seed database with sample data',
    'npm run lint': 'Run ESLint',
    'npm run lint:fix': 'Fix ESLint issues',
  },

  // Testing
  testing: {
    framework: 'Jest',
    unitTests: 'tests/unit/',
    integrationTests: 'tests/integration/',
    e2eTests: 'tests/e2e/',
    command: 'npm test',
    coverage: 'npm run test:coverage',
  },

  // Deployment
  deployment: {
    platforms: ['Heroku', 'AWS', 'Azure', 'DigitalOcean', 'Railway'],
    docker: {
      available: true,
      file: 'Dockerfile',
      compose: 'docker-compose.yml',
    },
    environment: {
      production: 'Use production .env',
      staging: 'Use staging .env',
    },
  },

  // Features
  features: [
    '✅ 3D Modern Design',
    '✅ Fully Responsive',
    '✅ JWT Authentication',
    '✅ Role-based Access Control',
    '✅ Product Management',
    '✅ Shopping Cart',
    '✅ Order Management',
    '✅ Payment Integration (Stripe, PayPal)',
    '✅ Shipping Integration',
    '✅ Product Reviews',
    '✅ Inventory Management',
    '✅ Analytics Dashboard',
    '✅ Email Notifications',
    '✅ Cron Jobs',
    '✅ API Documentation',
    '✅ Error Handling',
    '✅ Request Logging',
    '✅ Rate Limiting',
  ],

  // Support & Resources
  support: {
    documentation: '/docs',
    apiRef: '/docs/endpoints',
    email: 'support@ecommerce.com',
    github: 'https://github.com/asifkhan/ecommerce-backend',
  },
};
