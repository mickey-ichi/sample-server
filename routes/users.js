const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const userValidate = require('./user.validate');

/* GET users listing. */
router.get('/', function (req, res, next) {
    res.json({
        mickey: 'mickey'
    });
});

/* Register user */
router.post('/', userValidate, async (req, res, next) => {
    const user = await req.usersRepository.create(req.body);
    const token = jwt.sign({
        data: user,
    }, 'secret', { expiresIn: '5h' });
    res.status(201).json({
        token: token
    });
});

module.exports = router;
