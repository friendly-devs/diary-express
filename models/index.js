const mongoose = require('mongoose');
const dbConfig = require('../config/mongo');

mongoose.Promise = global.Promise;

const db = {};

db.mongoose = mongoose;
db.url = dbConfig.url;
db.users = require('./User')(mongoose);

module.exports = db;
