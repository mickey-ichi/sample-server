const express = require('express');
const router = express.Router();
const userValidate = require('./user.validate');

/* GET users listing. */
router.get('/', function (req, res, next) {
    res.json({
        mickey: 'huhu'
    });
});

/* Register user */
router.post('/', userValidate, async (req, res, next) => {
    let user = await req.usersRepository.create(req.body);
    console.log(user);
    res.status(201).json({
        mickey: 'heheh'
    });
});

module.exports = router;
