var mongoose = require('mongoose');
var database = require('../database');

exports.get = function(req, res) {
    var db = database.connect();
    db.on('error', function() { 
        res.send({'error': 'Failed to connect to the database.'})
        db.close();
    });
    db.once('open', function() {
        database.Company.find(function(err, docs) {
			if (err) return;
            var data = {
                title: 'Jobs',
                companies: docs,
                loggedIn: req.session.userId
            }
            db.close();
            res.render('jobs', data);
        });
        
    });
};

function formatDate(dateString) {
    var date = new Date(dateString);
    var dotw = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

    var dotwString = dotw[date.getDay()];
    var monthString = months[date.getMonth()];
    var dateString = date.getDate();
    var yearString = date.getFullYear();

    return dotwString + ', ' + monthString + ' ' + dateString + ', ' + yearString; 
}
