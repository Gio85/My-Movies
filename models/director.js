const mongoose = require('mongoose');

const directorSchema = new mongoose.Schema({
  name: String,
  country: String,
  image: String
});

module.exports = mongoose.model('Director', directorSchema);
