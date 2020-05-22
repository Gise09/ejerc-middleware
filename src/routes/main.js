// ************ Require's ************
const express = require('express');
const router = express.Router();
const adminVerify = require('../middlewares/admin');

// ************ Controller Require ************
const mainController = require('../controllers/mainController');

/* GET - home page. */
router.get('/', mainController.root);
router.get('/admin', adminVerify, mainController.saludarAdmin);

module.exports = router;

