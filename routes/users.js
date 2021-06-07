const express = require('express');
const bcrypt = require('bcrypt');
const db = require('../models');
const logger = require('../utils/logger');

const router = express.Router();
const User = db.users;

router.get('/sign-in', (req, res) => {
  res.render('users/sign-in');
});

router.post('/sign-in', async (req, res, next) => {
  const { username, password } = req.body;
  const user = await User.findOne({ username });

  const result = bcrypt.compareSync(password, user.password);

  res.redirect('/');
});

router.get('/sign-up', (req, res) => {
  res.render('users/sign-up');
});

router.post('/sign-up', (req, res, next) => {
  const data = req.body;

  try {
    const saltRounds = 10;
    const hash = bcrypt.hashSync(data.password, saltRounds);

    const user = new User({
      username: data.username,
      password: hash,
    });

    user.save();

    res.redirect('/sign-in');
  } catch (error) {
    logger.error(error);
    next();
  }
});

module.exports = router;
