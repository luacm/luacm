var mongoose = require('mongoose');

// News
exports.newsSchema = mongoose.Schema({
    title: String,
    date: String,
    body: String, 
    author: String,
    tags: [String]
});
exports.News = mongoose.model('News', exports.newsSchema, 'news');

// Author
exports.authorSchema = mongoose.Schema({
    username: String,
    password: String,
    displayName: String
});
exports.Author = mongoose.model('Author', exports.authorSchema, 'authors');

// Company
exports.companySchema = mongoose.Schema({
    name: String,
    position: String,
    description: String,
    link: String
});
exports.Company = mongoose.model('Company', exports.companySchema, 'companies');


// Methods
exports.connect = function() {
    mongoose.connect(process.env.MONGO_URI);
    return mongoose.connection;
}