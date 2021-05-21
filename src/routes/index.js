const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('Index');
});

router.get('/nativitas', (req, res) => {
    res.send('Nativitas');
});

module.exports = router;