var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const cors = require('cors');
const { v4: uuidv4 } = require('uuid');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');

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
app.use(bodyParser.json());

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use(cors());

dotenv.config();

const secretKey = process.env.JWT_SECRET;


// import mongoose and models
const Recipe = require('./models/Recipe');
const User = require('./models/User');
const UserInfo = require('./models/UserInfo'); 

// define global variable to store recipes
let recipes = [];

/*Get all recipes*/
app.get('/api/recipes', async (req, res) => {
  try {
    recipes = await Recipe.find({});
    res.json(recipes);
  } catch (err) {
    res.status(400).send(err.message);
  }
});

/*Save a Recipe*/
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


/*Delete a recipe by id*/
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

/*User Login*/
app.post('/api/login', async (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  try {
    const user = await User.findOne({ username });
    if (!user) {
      return res.json({ success: false, message: 'Username not exist' });
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.json({ success: false, message: 'Invalid password' });
    }
    const token = jwt.sign({ id: user._id, username: user.username }, secretKey, { expiresIn: '1h' });
    res.json({ success: true, token });
  } catch (error) {
    res.status(500).send('An error occurred. Please try again later.');
  }
});

/*User data transfer*/
app.get('/api/user', async (req, res) => {
  const token = req.header('Authorization').replace('Bearer ', '');

  if (!token) {
    return res.status(401).send({ error: 'Token is missing' });
  }

  try {
    const decoded = jwt.verify(token, secretKey);
    const username = decoded.username;

    const user = await UserInfo.findOne({ username: username });

    if (!user) {
      return res.status(404).send({ error: 'User not found' });
    }

    res.send({
      username: user.username,
      name: user.name,
      avatarUrl: user.avatarUrl,
      email: user.email,
      bio: user.bio,
    });
  } catch (error) {
    res.status(400).send({ error: 'Invalid token' });
  }
});


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