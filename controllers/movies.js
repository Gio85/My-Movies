const Movie = require('../models/movie');
const Director = require('../models/director');

function moviesIndex(req, res) {
  Movie
    .find(req.query)
    .populate('director')
    .sort({ name: 1 })
    .exec()
    .then(movies => {
      return Director
        .find()
        .sort({ name: 1 })
        .exec()
        .then(directors => {
          res.render('movies/index', { movies, directors, selectedDirector: req.query.director });
        });
    })
    .catch((err) => res.status(500).render('error', { err }));
}

function moviesShow(req, res) {
  Movie
    .findById(req.params.id)
    .exec()
    .then((movie) => {
      if(!movie) return res.status(404).send('Not Found');
      res.render('movies/show', {movie});
    })
    .catch((err) => {
      res.status(500).render('error', {err});
    });
}

function moviesNew(req, res) {
  Director
    .find()
    .exec()
    .then((directors) =>{
      res.render('movies/new', {directors});
    })
    .catch((err) => {
      res.status(500).render('error', { err });
    });
}

function moviesCreate(req, res) {
  req.body.user = req.currentUser;
  Movie
    .create(req.body)
    .then(() => {
      res.redirect('/movies');
    })
    .catch((err) => {
      res.status(500).render('error', { err });
    });
}

function moviesUpdate(req, res) {
  Movie
    .findById(req.params.id)
    .exec()
    .then(movie => {
      movie = Object.assign(movie, req.body);
      return movie.save();
    })
    .then(movie => {
      res.redirect(`/movies/${movie.id}`);
    })
    .catch(err => {
      res.status(500).render('error', { err });
    });
}

function moviesEdit(req, res) {
  Movie
    .findById(req.params.id)
    .populate('director')
    .exec()
    .then(movie => {
      return Director
        .find()
        .exec()
        .then(directors =>{
          res.render('movies/edit' ,{movie, directors});
        });
    })
    .catch((err) => {
      res.status(500).render('error', { err });
    });
}

function moviesDelete(req, res) {
  Movie
    .findById(req.params.id)
    .exec()
    .then((movie) => {
      if(!movie) return res.status(404).send('Not found');

      return movie.remove();
    })
    .then(() => {
      res.redirect('/movies');
    })
    .catch((err) => {
      res.status(500).render('error', { err });
    });
}

function moviesCommentsCreate(req, res) {
  Movie
    .findById(req.params.id)
    .exec()
    .then(movie => {
      movie.comments.push(req.body); // saved the new comment into the array
      return movie.save();
    })
    .then(movie => res.redirect(`/movies/${movie.id}`))
    .catch(err => res.render('error', { err }));
}

function moviesCommentsDelete(req, res) {
  Movie
    .findById(req.params.id)
    .exec()
    .then(movie => {
      const comment = movie.comments.id(req.params.commentId);
      comment.remove();
      return movie.save();
    })
    .then(movie => res.redirect(`/movies/${movie.id}`))
    .catch(err => res.render('error', { err }));
}

module.exports = {
  index: moviesIndex,
  show: moviesShow,
  new: moviesNew,
  create: moviesCreate,
  update: moviesUpdate,
  edit: moviesEdit,
  delete: moviesDelete,
  commentsCreate: moviesCommentsCreate,
  commentsDelete: moviesCommentsDelete
};
