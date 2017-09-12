const Movie = require('../models/movie');
const Director = require('../models/director');

function moviesIndex(req, res) {
  Movie
    .find(req.query)// aggiunto questo per filtrare il film in base al regista
    .populate('director')
    .exec()
    .then(movies => {
      return Director// tutto questo per mostrare i film del regista selezionato
        .find()
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
    .populate('user comments.user')
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
  console.log(req.body);
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

function moviesFavorite(req, res) {
  // if the selected movie is not in the user's favorites
  if(!req.currentUser.favorites.find(movie => movie.id === req.params.id)) {
    // add the movie id to the user's favorites
    req.currentUser.favorites.push(req.params.id);
  } else {
    // remove the movie from the user's favorites
    req.currentUser.favorites = req.currentUser.favorites.filter(movie => movie.id !== req.params.id);
  }

  // save the user
  req.currentUser.save()
    .then(() => res.redirect('back'));
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
  req.body.user = req.currentUser;
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
  favorite: moviesFavorite,
  delete: moviesDelete,
  commentsCreate: moviesCommentsCreate,
  commentsDelete: moviesCommentsDelete
};
