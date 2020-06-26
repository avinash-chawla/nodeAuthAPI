const router = require('express').Router();
const verify = require('./verifytoken');
const User = require('../model/User');

router.get('/', verify, (req, res) => {
    res.json({ posts: { id: 1, name: "WinterSeason" } });
});

router.get('/user', verify, (req, res) => {
    res.send(req.user);
    //User.findById({ _id: req.user._id});
})

module.exports = router;

