const express = require('express');
const router = express.Router();

const { getPosts, createPost } = require('../controllers/postController');

router.route('/').get(getPosts).post(createPost);
// router.route('/postman').post(createPersonPostman);
// router.route('/:id').put(updatePerson).delete(deletePerson);

module.exports = router;
