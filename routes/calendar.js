exports.get = function(req, res) {
    var data = {
        title: 'Calendar',
        loggedIn: req.session.userId
    }
    res.render('calendar', data);
};
