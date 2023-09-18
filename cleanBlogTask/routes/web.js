const express = require('express');
const router = express.Router();
const mainController = require('../controllers/main.controller');

// Define routes with their corresponding controller functions

router.get('/', mainController.index);
router.get('/about', mainController.about);
router.get('/contact', mainController.contact);
router.get('/post', mainController.post);

module.exports = router;
