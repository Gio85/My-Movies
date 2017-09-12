const mongoose = require('mongoose');

const directorSchema = new mongoose.Schema({
  name: String,
  wiki: String,
  country: String,
  image: String,
  user: {type: mongoose.Schema.ObjectId, ref: 'User'},
  synopsis: String
});

module.exports = mongoose.model('Director', directorSchema);
