// Grab express and our routes
var express = require('express')
var app = express();
var index = require('./routes/index');
var about = require('./routes/about');
var news = require('./routes/news');
var workshops = require('./routes/workshops');
var mobilehigh = require('./routes/mobilehigh');
var calendar = require('./routes/calendar');

// Setup handlebars
var hbs = require('hbs');
hbs.registerPartials(__dirname + '/views/partials');

// Setup our public folder for all of our assets and such
app.use(express.static('public'));

// Set handlebars as our templating engine
app.set('view engine', 'html');
app.engine('html', hbs.__express);

// Setup sessions
app.use(express.cookieParser('spider-man'));
app.use(express.cookieSession());

// Handle POST and PUT
app.use(express.bodyParser());
app.use(express.methodOverride())

// List out all of our pages
app.use(app.router);
app.get('/', index.get);
app.get('/about', about.get);
app.get('/news', news.get);
app.get('/workshops', workshops.get);
app.get('/mobilehigh', mobilehigh.get);
app.get('/calendar', calendar.get);

// Setup error pages
app.use(function(req, res, next) {
    res.status(404);
  
    // respond with html page
    if (req.accepts('html')) {
        res.render('404');
        return;
    }

    // default to plain-text. send()
    res.type('txt').send('Not found');
});

// If on our production server, we'll use the environment port.
// Otherwise, we just use 5000
var port = process.env.PORT || 5000;
app.listen(port, function() {
    console.log('Listening on port ' + port);
});