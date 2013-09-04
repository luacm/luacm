exports.get = function(req, res) {
    var data = {
        title: 'About',
        loggedIn: req.session.userId
    }
    res.render('about', data);
};
