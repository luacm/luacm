var mongoose = require('mongoose');
var database = require('../database');

exports.get = function(req, res) {
    var db = database.connect();
    db.on('error', function() { res.send({'error': 'Failed to connect to the database.'})});
    db.once('open', function() {
        database.News.find(function(err, results) {
            console.log(results);
            var data = {
                title: 'News',
                news: results
            }

            res.render('news', data);
        });
        
    });
};
