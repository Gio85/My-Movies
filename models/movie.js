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

movieSchema
  .virtual('avgRating') //virtual la creiamo quando vogliamo usare i dati del database ma allo stesso tempo non vogliamo crearla ogni volta che inseriamo un nuovo film
  .get(function getAvgRating() {
    if(this.comments.length === 0) return false;
    const total = this.comments.reduce((sum, comment) => {
      return sum + comment.rating;
    }, 0);
    const avg = total / this.comments.length;
    return Math.round(avg*2)/2;
  });

movieSchema.methods.getStarIcons = function() {
  let stars = '';
  for(let i = 0; i<Math.floor(this.avgRating); i++) {
    stars += '<i class="fa fa-star"></i> ';
  }
  if(this.avgRating % 1 > 0) stars += '<i class="fa fa-star-half"></i>';
  return stars;
};

module.exports = mongoose.model('Movie', movieSchema);
