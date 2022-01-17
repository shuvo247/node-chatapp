// External Imports
const express = require('express');
const router = express.Router();
// Internal Imports
const {getInbox} = require('../controller/inboxController');
const getDecorateHtml = require('../middlewares/common/getDecorateHtml');
// Login page 

router.get('/',getDecorateHtml('Index'),getInbox);


module.exports = router;