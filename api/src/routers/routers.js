const express = require('express');
const router = express.Router();
const usersController = require('../controllers/usersController'); 

router.get('/users', usersController.listAll);
router.get('/user/:id', usersController.listOne);

module.exports = router;
