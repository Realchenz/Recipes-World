var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const cors = require('cors');
const { v4: uuidv4 } = require('uuid');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use(cors());

// import mongoose and Recipe model
const mongoose = require('mongoose');
const Recipe = require('./models/Recipe');
mongoose.connect('mongodb://localhost:27017/recipeDB', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));

// define global variable to store recipes
let recipes = [];

app.get('/api/recipes', async (req, res) => {
  try {
    recipes = await Recipe.find({});
    res.json(recipes);
  } catch (err) {
    res.status(400).send(err.message);
  }
});

app.post('/api/recipes',  (req, res) => {
  const body = req.body;

  const newRecipe = {
    id: uuidv4().toString(),
    title: body.title,
    description: body.description,
    ingredients: body.ingredients,
    instructions: body.instructions,
    image: body.image
  };
  
  recipes.push(newRecipe);

  const newRecipeMongo = new Recipe(newRecipe);
  newRecipeMongo.save().then(() => {
      console.log('New recipe added successfully');
    })
    .catch(err => {
      console.error('Error saving recipe:', err);
    });

  res.status(201).json(newRecipe);
});

app.delete('/api/recipes/:id', async (req, res) => {
  const id = req.params.id;
  console.log('Deleting recipe with id:', id);
  try {
    await Recipe.deleteOne({ id: id });
    recipes = recipes.filter(recipe => recipe.id !== parseInt(id));
    res.status(204).end();
  } catch (err) {
    res.status(400).send(err.message);
  } 
}
);


const PORT = 8000;
app.listen(PORT, () => {
  console.log('Server is running on port', PORT);
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;