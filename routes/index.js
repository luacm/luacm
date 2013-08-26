exports.get = function(req, res) {
    var data = {
        title: 'Home'
    }
    res.render('index', data);
};
