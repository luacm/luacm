var mongoose = require('mongoose');
var database = require('../database');

exports.get = function(req, res) {
    // var db = database.connect();
    // db.on('error', function() { 
    //     res.send({'error': 'Failed to connect to the database.'})
    //     db.close();
    // });
    // db.once('open', function() {
    //     var tag = req.query.tag;
    //     var filter = {};
    //     if (tag)
    //         filter = {'tags':tag}

    //     database.News.find(filter, function(err, docs) {
    //         for (var i = 0; i < docs.length; i++) {
    //             docs[i].date = formatDate(docs[i].date);
    //         }
    //         if (docs.length == 0)
    //             docs.push({'title':'Sorry, there are no posts that match your criteria.'});
    //         var data = {
    //             title: 'News',
    //             news: docs
    //         }
    //         db.close();
    //         res.render('news', data);
    //     });
        
    // });
    res.render('login');
};

exports.post = function(req, res) {
    res.render('login');
}