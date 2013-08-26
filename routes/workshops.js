exports.get = function(req, res) {
    var data = {
        title: 'Workshops'
    }
    res.render('workshops', data);
};
