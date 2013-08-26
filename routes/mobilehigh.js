exports.get = function(req, res) {
    var data = {
        title: 'mobiLEHIGH 2014'
    }
    res.render('mobilehigh', data);
};
