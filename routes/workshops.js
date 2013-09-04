exports.get = function(req, res) {
    var data = {
        title: 'Workshops',
        loggedIn: req.session.userId
    }
    res.render('workshops', data);
};
