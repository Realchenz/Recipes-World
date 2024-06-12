const mongoose = require('mongoose');
const { default: UserName } = require('../../recipe-frontend/src/components/User/UserName');

const userDB = mongoose.createConnection('mongodb://localhost:27017/userInfoDB', { useNewUrlParser: true, useUnifiedTopology: true });
userDB.on('connected', () => console.log('Connected to userInfoDB'));
userDB.on('error', err => console.error('Error connecting to userInfoDB:', err));

const userSchema = new mongoose.Schema({
    username: String,
    name: String,
    avatarUrl: String,
    email: String,
    bio: String,
});

const User = userInfoDB.model('User', userSchema);

module.exports = User;
