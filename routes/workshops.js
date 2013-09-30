var request = require('request');
var base = require('./base');

exports.get = function(req, res) {
    // Grab all of our workshops from the calendar
    request.get('https://www.googleapis.com/calendar/v3/calendars/lehigh.edu_naq1tfs4dqc9ilon77jg64bvrk@group.calendar.google.com/events?key=AIzaSyBvFuL8GRvNvmmEI28PkthkSnNMWiLvAGE', function(err, data) {
        if (err) {
            console.log("ERROR\n" + err);
        }
        var body = JSON.parse(data.body);

        // Build up an array of workshop items
        var workshops = [];
        for (var i = 0; i < body.items.length; i++) {
            var item = body.items[i];
            var w = {
                'title': item.summary,
                'location': item.location,
                'date': item.start.dateTime,
                'startTime': item.start.dateTime,
                'endTime': item.end.dateTime,
                'body': item.description
            };
            workshops.push(w);
        }

        // Sort by date - most recent comes first
        workshops.sort(function(a, b) {
            var dateA = new Date(a.date);
            var dateB = new Date(b.date);
            return dateA < dateB;
        });

        // Render
        var data = {
            'title': 'Workshops',
            'loggedIn': req.session.userId,
            'workshops': workshops
        }
        res.render('workshops', data);
    });
    
};
