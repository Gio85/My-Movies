const mongoose = require('mongoose');

const directorSchema = new mongoose.Schema({
  name: String,
  wiki: String,
  country: String,
  image: String,
  synopsis: String
});

module.exports = mongoose.model('Director', directorSchema);
