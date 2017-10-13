'use strict';
/*
  Getting modules
*/
const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const session = require('express-session');
const express_validator = require('express-validator');
const flash = require('express-flash-2');

// Getting the root path
global.__basedir = __dirname;

const mongo = require('mongodb');
const mongoose = require('mongoose');

/**
  Setting strategy for passport
**/
const passport = require('passport');
const local_strategy = require('passport-local').Strategy;

var index = require('./routes/index');
var users = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// Handlig sessions
app.use(session({
    secret: 'secret',
    saveUninitialized: true,
    resave: true
}));

// Middleware for flash
app.use(flash());

// Passport middleware
app.use(passport.initialize());
app.use(passport.session());

// Validator middleware
app.use(express_validator({
    errorFormater: (param, msg, value) => {
        let namespace = param.split(''),
            root = namespace.shift(),
            formParam = root;

        while (namespace.length) {
            formParam += '[' + namespace.shift() + ']'
        }

        return {
            param: formParam,
            msg: msg,
            value: value
        };
    }
}));

app.use('/', index);
app.use('/users', users);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handler
app.use(function(err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ?
        err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
});


module.exports = app;