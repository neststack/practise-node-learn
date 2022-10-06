const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
    title: { type: String, required: [true, 'A post must have a title'] },
    description: {
        type: String,
        required: [true, 'A post must have a description'],
    },
});

const Post = mongoose.model('Post', postSchema);

module.exports = Post;
