const express = require('express');
const db = require('../models');
const logger = require('../utils/logger');

const router = express.Router();
const User = db.users;

router.get('/sign-in', (req, res) => {
  res.render('users/sign-in');
});

router.get('/sign-up', (req, res) => {
  res.render('users/sign-up');
});

router.post('/sign-up', (req, res) => {
  logger.info(req);

  const data = req.body;

  const user = new User({
    username: data.username,
    password: data.password,
    firstName: data.firstName,
    lastName: data.lastName,
  });

  user.save();

  res.render('users/sign-up');
});

module.exports = router;
