exports.get = function(req, res) {
    var data = {
        title: 'Home',
        loggedIn: req.session.userId
    }
    res.render('index', data);
};
