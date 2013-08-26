exports.get = function(req, res) {
    var data = {
        title: 'About'
    }
    res.render('about', data);
};
