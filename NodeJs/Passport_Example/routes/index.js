'use strict';
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', ensureAuthenticated,function(req, res, next) {
    res.render('index', {
        title: 'Dashboard'
    });

});

function ensureAuthenticated(req, res, next) {
	if (req.isAuthenticated()) {
		return next();
	}

	res.flash('error', 'You Need to be authenticated to see this page');
	res.redirect('/users/login');
}

module.exports = router;