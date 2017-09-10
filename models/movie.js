const mongoose = require('mongoose');

const commentsSchema = new mongoose.Schema({
  text: String,
  rating: Number
});

const movieSchema = new mongoose.Schema({
  title: String,
  year: String,
  director: {type: mongoose.Schema.ObjectId, ref: 'Director'},
  filmSynopsis: { type: String, maxlength: 580 },
  image: String,
  comments: [commentsSchema]
});


module.exports = mongoose.model('Movie', movieSchema);
