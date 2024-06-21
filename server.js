const express = require('express');
const dotenv = require('dotenv').config();
const cors = require('cors');
const { Sequelize } = require('sequelize');

const userRoute = require('./routes/UserRoutes');
const obatRoute = require('./routes/ObatRoute');
const checkoutRoute = require('./routes/CheckoutRoute');
const detailCheckoutRoute = require('./routes/DetailCheckoutRoute');
const predictRoute = require('./routes/UploadRoute');

const JwtMiddleware = require('./middlewares/JwtMiddleware');

const app = express();
const port = process.env.PORT || 8080;

// Initialize Sequelize
const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASS, {
  host: process.env.DB_HOST,
  dialect: 'mysql',
});

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Test route
app.get('/', (req, res) => {
  res.send('Selamat datang di API ku');
});

// Routes
app.use('/api/user', userRoute);
app.use('/api/obat', JwtMiddleware, obatRoute);
app.use('/api/checkout', JwtMiddleware, checkoutRoute);
app.use('/api/detailCheckout', JwtMiddleware, detailCheckoutRoute);
app.use('/api/predict', JwtMiddleware, predictRoute);

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

// Test connection and start server
async function initialize() {
  try {
    await sequelize.authenticate();
    console.log('Database connection has been established successfully.');
    app.listen(port, () => {
      console.log(`Server is running on http://localhost:${port}`);
    });
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
}

initialize();
