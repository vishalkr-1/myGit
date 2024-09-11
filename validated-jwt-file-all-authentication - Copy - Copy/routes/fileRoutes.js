const express = require('express');
const { downloadFile } = require('../controller/fileController');
const router = express.Router();
router.get('/download/:id', downloadFile);

module.exports = router;