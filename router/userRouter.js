// External Imports
const express = require('express');
const router = express.Router();

// Internal Imports
const {getUsers} = require('../controller/userController');
// Login page 

router.get('/',getDecorateHtml('Users'),getUsers);


module.exports = router;