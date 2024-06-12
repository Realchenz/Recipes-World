// This file contains the schema for the Recipe model
const mongoose = require('mongoose');

const recipeDB = mongoose.createConnection('mongodb://localhost:27017/recipeDB', { useNewUrlParser: true, useUnifiedTopology: true });
recipeDB.on('connected', () => console.log('Connected to recipeDB'));
recipeDB.on('error', err => console.error('Error connecting to recipeDB:', err));

const recipeSchema = new mongoose.Schema({
  title: String,
  id: { type: String, unique: true },
  description: String,
  ingredients: [String],
  instructions: [String],
  image: String,
});

const Recipe = recipeDB.model('Recipe', recipeSchema);

module.exports = Recipe;
