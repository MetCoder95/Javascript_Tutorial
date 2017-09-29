/**
 * TODO:
 * - Last video saw: Basic Express Website - 2
 */

'use strict';
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const jade = require('jade');

let app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(express.static(path.join(__dirname, 'public')));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));

app.get('/', function (req, res) {
    res.render('index');
});

app.get('/about', function(req, res) {
    res.render('about');
});

app.get('/contact', function(req, res) {
    res.render('contact');
});

app.post('/contact/send', (req, res) => {
    /**
     * @function createTransport(@param object{})
     * @param object{
     *  @var service(string): servicio a utilizar para enviar el correo
     *  @var auth(object):{
     *      @var user(string): nombre o correo para realizar login desde el cual se mandaran los mensajes,
     *      @var pass(string): contraseña para realizar login
     *          }
     * }
     */
    let transporter = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
            user: 'karlosgato95@gmail.com',
            pass: 'Sep21995'
        }
    });

    let mailOptions = {
        from: req.body.name + '<' + req.body.email + '>',
        to: 'karlosgato95@gmail.com',
        subject: 'Page Example Contact',
        text: 'This is the message. . . \n' + req.body.message,
        html: '<p>This is the message. . .</p><ul><li>Name: ' + req.body.name + '</li><li>Email: ' + req.body.email + '</li><li>Message: ' + req.body.message + '</li></ul>'
    }

    transporter.sendMail(mailOptions, (err, info) => {
        if (err) {
            console.log(err);
            res.redirect('/');
        } else {
            console.log('Message Sent: ' + info.response);
            res.redirect('/');
        }

        
    })
});

app.listen(3000, function () {
    console.log('App listening on port 3000!');
});