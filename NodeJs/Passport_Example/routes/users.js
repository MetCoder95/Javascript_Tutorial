var express = require('express');
const path = require('path');
var router = express.Router();
const multer = require('multer');
const uploads = multer({
    dest: path.join(__dirname, 'uploads')
});
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const User = require('../models/user.js')


/* GET users listing. */
router.get('/', function(req, res, next) {
    res.send('respond with a resource');
});

/* GET Form for Register */
router.get('/register', function(req, res, next) {
    res.render('register', {
        title: 'Register'
    });
});

/* GET Form for Login */
router.get('/login', function(req, res, next) {
    res.render('login', {
        title: 'Log in'
    });
});

/* POST information for Register */
router.post('/register', uploads.single('avatar'), function(req, res, next) {

    // Form validator
    req.checkBody('name', 'Name field is require').notEmpty();
    req.checkBody('email', 'Email field is require').isEmail();
    req.checkBody('username', 'Username field is require').notEmpty();
    req.checkBody('password', 'Password field is require').notEmpty();
    req.checkBody('password_confirmation', 'The password do not match').equals(req.body.password);


    let name = req.body.name;
    let username = req.body.username;
    let email = req.body.email;
    let password = req.body.password;
    let password_confirmation = req.body.password_confirmation;
    let img_path;

    if (req.file) {
        console.log('Avatar Uploaded');
        img_path = req.file.filename;
    } else {
        console.log('Not image uploaded');
        img_path = 'no_image';
    }



    // Check errors
    let errors = req.validationErrors();

    if (errors) {
        res.render('register', {
            errors: errors,
            title: 'Register'
        })
    } else {
        let new_user = new User({
            name: name,
            username: username,
            email: email,
            password: password,
            avatar: img_path
        });

        User.createUser(new_user, (err, user) => {
            if (err) {
                throw error;
            }
        });

        res.flash('success', 'Welcome aboard');
        res.location('/');
        res.redirect('/');
    }
});

/* POST to Log In */
router.post('/login', passport.authenticate('local', {
    failureRedirect: '/users/login',
    failureFlash: 'Invalid Username or Password'
}), function(req, res, next) {
    res.flash('success', 'Welcome again');

    // Save data into app to use in templates
    req.app.locals.user = req.user;

    res.redirect('/');
});


/**
 * GET Log Out
 */
router.get('/logout', function(req, res) {
    req.logout();
    req.app.locals.user = null;
    res.flash('warning', "You're now log out");
    res.redirect('/users/login');
})

/**
 * Implement a Local Strategy to Authenticate
 * TODO: Use serialize from Passport
 */
passport.use(new LocalStrategy((username, password, done) => {
    User.getUserByUsername(username, (err, user) => {
        if (err) {
            throw err;
        }
        if (!user) {
            return done(null, false, {
                message: 'Uknown User'
            })
        }

        User.comparePassword(password, user.password, (err, match) => {
            if (err) {
                return done(err);
            }

            if (match) {
                return done(null, user);
            } else {
                return done(null, false, {
                    message: 'Invalid Password'
                })
            }
        })
    });
}));

passport.serializeUser((user, done) => {
    done(null, user.id);
});

passport.deserializeUser((id, done) => {
    User.getUserById(id, (err, user) => {
        done(err, user);
    })
})

module.exports = router;