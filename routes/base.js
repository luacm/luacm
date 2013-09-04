exports.getBaseUrl = function(req) {
    var port = req.app.settings.port;
    return req.protocol + '://' + req.headers.host;
}

exports.redirect = function(res, newUrl) {
    res.writeHead(302, {
        'Location': newUrl
    });
    res.end();
}