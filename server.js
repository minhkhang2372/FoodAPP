
const express = require('express');
const bodyParser = require('body-parser');
const authRoutes = require('./routes/auth');
const likeRoutes = require('./routes/likes');
const ratingRoutes = require('./routes/ratings');
const orderRoutes = require('./routes/orders');
const { sequelize } = require('./config/db');
require('dotenv').config();

const app = express();

app.use(bodyParser.json());

app.use('/auth', authRoutes);
app.use('/likes', likeRoutes);
app.use('/ratings', ratingRoutes);
app.use('/orders', orderRoutes);

sequelize.sync().then(() => {
  app.listen(3000, () => {
    console.log('Server is running on port 3000');
  });
});
