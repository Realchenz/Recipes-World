// This file contains the schema for the Recipe model
const mongoose = require('mongoose');

const recipeSchema = new mongoose.Schema({
  title: String,
  id: Number,
  description: String,
  ingredients: [String],
  instructions: [String],
  image: String,
});

const Recipe = mongoose.model('Recipe', recipeSchema);

module.exports = Recipe;
