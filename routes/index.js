const express = require('express');

const homeRouter = require('./home');
const usersRouter = require('./users');

const router = express.Router();

/* Root router */
router.use('/', homeRouter);
router.use('/', usersRouter);

module.exports = router;
