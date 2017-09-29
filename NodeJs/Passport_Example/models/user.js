'use strict';

const mongoose = require('mongoose');
const bcrypt = require('bcryptjs')

mongoose.connect('mongodb://localhost/nodeauth');

let db = mongoose.connection;

/**
 * @schema User Schema
 */
let UserSchema = mongoose.Schema({
    username: {
        type: String,
        index: true
    },
    name: {
        type: String
    },
    password: {
        type: String
    },
    email: {
        type: String
    },
    name: {
        type: String
    },
    avatar: {
        type: String
    }
});

const User = module.exports = mongoose.model('User', UserSchema);

module.exports.createUser = (new_user, callback) => {
    bcrypt.genSalt(10, (err, salt) => {
        if (err) {
            throw err;
        }
        bcrypt.hash(new_user.password, salt, (err, hash) => {
            new_user.password = hash;
            new_user.save(callback);
        })
    })

}

module.exports.getUserById = (id, callback) => {
    User.findById(id, callback);
}

module.exports.getUserByUsername = (username, callback) => {
    let query = {
        username: username
    };

    User.findOne(query, callback);
}

module.exports.comparePassword = (password, hash, callback) => {
    bcrypt.compare(password, hash, (err, match) => {
        callback(null, match);
    });
}