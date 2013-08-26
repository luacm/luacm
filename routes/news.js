exports.get = function(req, res) {
    var data = {
        title: 'News'
    }
    res.render('news', data);
};
