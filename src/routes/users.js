const express = require('express');
const router = express.Router();

router.get('/users/signin', (req, res) => {
    res.send('Iniciar sesion');
});

router.get('/users/signup', (req, res) => {
    res.send('Registrate');
});

module.exports = router;