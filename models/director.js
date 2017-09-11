const mongoose = require('mongoose');

const directorSchema = new mongoose.Schema({
  name: String,
  country: String,
  image: String,
  synopsis: String
});

module.exports = mongoose.model('Director', directorSchema);
