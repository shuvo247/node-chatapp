// External Imports
const express = require('express');
const router = express.Router();

// Internal Imports
const {getLogin} = require('../controller/loginController')
// Login page 

router.get('/',getDecorateHtml('Login'),getLogin);


module.exports = router;