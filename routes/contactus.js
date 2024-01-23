const path  = require('path');

const express = require('express');
const router = express.Router();

const rootDir = require('../util/path')

const contactController = require('../controllers/contactus');

router.get('/contactus',contactController.getContactUs);

router.post('/contactus',contactController.postContactUs);

module.exports = router;