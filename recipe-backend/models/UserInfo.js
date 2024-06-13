const mongoose = require('mongoose');

const userInfoDB = mongoose.createConnection('mongodb://localhost:27017/userInfoDB', { useNewUrlParser: true, useUnifiedTopology: true });
userInfoDB.on('connected', () => console.log('Connected to userInfoDB'));
userInfoDB.on('error', err => console.error('Error connecting to userInfoDB:', err));

const userInfoSchema = new mongoose.Schema({
    username: String,
    name: String,
    avatarUrl: String,
    email: String,
    bio: String,
});

const User = userInfoDB.model('UserInfo', userInfoSchema);

module.exports = User;
