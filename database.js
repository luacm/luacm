var mongoose = require('mongoose');

exports.newsSchema = mongoose.Schema({
    title: String,
    date: String,
    body: String, 
    author: String,
    tags: [String]
});
exports.News = mongoose.model('News', exports.newsSchema, 'news');

exports.authorSchema = mongoose.Schema({
    username: String,
    password: String,
    displayName: String
});
exports.Author = mongoose.model('Author', exports.authorSchema, 'authors');

exports.connect = function() {
    mongoose.connect(process.env.MONGO_URI);
    return mongoose.connection;
}