const mongoose = require('mongoose');

const userDB = mongoose.createConnection('mongodb://localhost:27017/userDB', { useNewUrlParser: true, useUnifiedTopology: true });
userDB.on('connected', () => console.log('Connected to userDB'));
userDB.on('error', err => console.error('Error connecting to userDB:', err));

const userSchema = new mongoose.Schema({
    username: { type: String, unique: true },
    password: String,
});

const User = userDB.model('User', userSchema);

module.exports = User;
