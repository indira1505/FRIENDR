const mongoose = require('mongoose');
const UserModel = mongoose.model('User', 
        { 
            id: Number,
            firstName: String,
            lastName: String,
            userName: String,
        });

module.exports = UserModel;