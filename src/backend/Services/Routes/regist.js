const express = require('express');
const regisController = require('../Controller/regisController');


const router = express.Router();
router.post('/',regisController.regis);

module.exports = router