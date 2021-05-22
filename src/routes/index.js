const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('index');
});

router.get('/nativitas', (req, res) => {
    res.render('nativitas');
});

module.exports = router;