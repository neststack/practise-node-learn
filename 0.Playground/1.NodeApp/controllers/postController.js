const Post = require('../models/postModel');

const getPosts = async (req, res) => {
    try {
        const posts = await Post.find();
        res.status(200).json({
            status: 'success',
            results: posts.length,
            data: posts,
        });
    } catch (error) {
        res.status(404).json({
            status: 'fail',
            message: error,
        });
    }
};

const createPost = async (req, res) => {
    try {
        const newPost = await Post.create(req.body);
        res.status(201).json({
            status: 'success',
            data: {
                post: newPost,
            },
        });
    } catch (error) {
        res.status(400).json({
            status: 'fail',
            message: error,
        });
    }
};

module.exports = {
    getPosts,
    createPost,
};
