const HOST = 'localhost';
const PORT = 27017;
const DB = 'diary';

module.exports = {
  url: `mongodb://${HOST}:${PORT}/${DB}`,
};
