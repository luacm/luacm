var mongoose = require('mongoose');
var database = require('../database');
var base = require('./base');

exports.get = function(req, res) {
    var data = {'title': 'Login'};
    if (req.query.error) 
        data.hasError = true;
    res.render('login', data);
};

exports.post = function(req, res) {
    var db = database.connect();
    db.on('error', function() { 
        res.send({'error': 'Failed to connect to the database.'})
        db.close();
    });
    db.once('open', function() {
        var username = req.body.username;
        var password = req.body.password;
        database.Author.find({'username':username, 'password':password}, function(err, docs) {
            if (docs.length == 1) {
                req.session.userId = docs[0]._id;
                base.redirect(res, '/');
            }
            else {
                base.redirect(res, '/login?error=bad_login');
            }
            db.close();
        });
        
    });
}