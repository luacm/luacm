exports.get = function(req, res) {
    var data = {
        title: 'mobiLEHIGH 2014',
        loggedIn: req.session.userId
    }
    res.render('mobilehigh', data);
};
