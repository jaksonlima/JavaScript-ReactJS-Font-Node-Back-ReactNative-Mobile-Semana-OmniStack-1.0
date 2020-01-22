const mongoose = require('mongoose');

const DevSchema = mongoose.Schema({
    name: String,
    github_username: String,
    bio: String,
    avatar_url: String,
    techs: [String]
});

module.exports = mongoose.model('Dev', DevSchema);