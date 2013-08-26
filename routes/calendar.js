exports.get = function(req, res) {
    var data = {
        title: 'Calendar'
    }
    res.render('calendar', data);
};
