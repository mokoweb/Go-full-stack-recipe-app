const bodyParser = require('body-parser');
const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
app.use('/images', express.static(path.join(__dirname, 'images')));
const recipeRoutes = require('./routes/recipe')
const userRoutes = require('./routes/user')
const app = express();

mongoose.connect('mongodb+srv://mokoweb:rKy82hTMUqZkc8p@cluster0-mhthk.mongodb.net/test?retryWrites=true&w=majority')
  .then(() => {
    console.log('Successfully connected to MongoDB Atlas!');
  })
  .catch((error) => {
    console.log('Unable to connect to MongoDB Atlas!');
    console.error(error);
  });



app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
  });

  app.use(bodyParser.json());

  app.use('/api/recipes', recipeRoutes)
  app.use('/api/auth', userRoutes)
module.exports = app; 