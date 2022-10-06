const express = require('express');
const router = express.Router();

const { getUsers, createUser } = require('../controllers/userController');

router.route('/').get(getUsers).post(createUser);
// router.route('/postman').post(createPersonPostman);
// router.route('/:id').put(updatePerson).delete(deletePerson);

module.exports = router;
