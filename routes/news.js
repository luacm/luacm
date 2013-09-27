var mongoose = require('mongoose');
var database = require('../database');
var base = require('./base');

exports.get = function(req, res) {
    var db = database.connect();
    db.on('error', function() { 
        res.send({'error': 'Failed to connect to the database.'})
        db.close();
    });
    db.once('open', function() {
        var tag = req.query.tag;
        var filter = {};
        if (tag)
            filter = {'tags':tag}

        database.News.find(filter, function(err, docs) {
            if (docs.length == 0)
                docs.push({'title':'Sorry, there are no posts that match your criteria.'});
            var data = {
                title: 'News',
                news: docs,
                loggedIn: req.session.userId
            }
            db.close();
            res.render('news', data);
        });
        
    });
};