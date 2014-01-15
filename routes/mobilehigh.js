exports.get = function(req, res) {
    var path = req.params[0] ? req.params[0] : 'index.html';
    if (path == 'index.html') {
        res.render('mobilehigh/index', {
            'title': 'Home',
            'layout': 'mobilehigh_layout'
        });
    }
    else if (path == 'assets.html') {
        res.render('mobilehigh/assets', {
            'title': 'Assets',
            'layout': 'mobilehigh_layout'
        });
    }
    else if (path == 'dates.html') {
        res.render('mobilehigh/dates', {
            'title': 'Dates',
            'layout': 'mobilehigh_layout'
        });
    }
    else if (path == 'getting_started.html') {
        res.render('mobilehigh/getting_started', {
            'title': 'Getting Started',
            'layout': 'mobilehigh_layout'
        });
    }
    else if (path == 'rules.html') {
        res.render('mobilehigh/rules', {
            'title': 'Rules',
            'layout': 'mobilehigh_layout'
        });
    }
    else {
        res.render('404', {
            'title': 'Page Not Found'
        });
    }
};
