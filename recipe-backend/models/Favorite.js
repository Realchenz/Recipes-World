const mongoose = require('mongoose');

const favoriteDB = mongoose.createConnection('mongodb://localhost:27017/favoriteDB', { useNewUrlParser: true, useUnifiedTopology: true });
favoriteDB.on('connected', () => console.log('Connected to favoriteDB'));
favoriteDB.on('error', err => console.error('Error connecting to favoriteDB:', err));

const favoriteSchema = new mongoose.Schema({
    username: String,
    recipeId: String,
}
);

const Favorite = favoriteDB.model('Favorite', favoriteSchema);

module.exports = Favorite;