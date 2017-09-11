const mongoose = require('mongoose');

const commentsSchema = new mongoose.Schema({
  text: String,
  rating: Number,
  user: {type: mongoose.Schema.ObjectId, ref: 'User'}
});

const movieSchema = new mongoose.Schema({
  title: String,
  year: String,
  director: {type: mongoose.Schema.ObjectId, ref: 'Director'},
  filmSynopsis: { type: String, maxlength: 580 },
  youtube: String,
  wiki: String,
  user: {type: mongoose.Schema.ObjectId, ref: 'User'},
  image: String,
  comments: [commentsSchema]
});


module.exports = mongoose.model('Movie', movieSchema);
