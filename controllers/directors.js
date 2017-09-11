const Director = require('../models/director');


function directorsIndex(req, res) {
  Director
    .find()
    .exec()
    .then((directors) =>{
      res.render('directors/index', {directors});
    })
    .catch((err) =>{
      res.status(500).render('error', { err });
    });
}

function directorsNew(req, res) {
  Director
    .find()
    .exec()
    .then((directors) =>{
      res.render('directors/new', {directors});
    })
    .catch((err) => {
      res.status(500).render('error', { err });
    });
}

function directorsCreate(req, res) {
  req.body.user = req.currentUser;
  Director
    .create(req.body)
    .then(() => {
      res.redirect('/directors');
    })
    .catch((err) => {
      res.status(500).render('error', { err });
    });
}

function directorsUpdate(req, res) {
  Director
    .findById(req.params.id)
    .exec()
    .then(director => {
      director = Object.assign(director, req.body);
      return director.save();
    })
    .then(director => {
      res.redirect(`/directors/${director.id}`);
    })
    .catch(err => {
      res.status(500).render('error', { err });
    });
}

function directorsEdit(req, res) {
  Director
    .findById(req.params.id)
    .populate('director')
    .exec()
    .then(director => {
      return Director
        .find()
        .exec()
        .then(directors =>{
          res.render('directors/edit' ,{director, directors});
        });
    })
    .catch((err) => {
      res.status(500).render('error', { err });
    });
}

function directorsFavorite(req, res) {
  // if the selected director is not in the user's favorites
  if(!req.currentUser.favorites.find(director => director.id === req.params.id)) {
    // add the director id to the user's favorites
    req.currentUser.favorites.push(req.params.id);
  } else {
    // remove the director from the user's favorites
    req.currentUser.favorites = req.currentUser.favorites.filter(director => director.id !== req.params.id);
  }

  // save the user
  req.currentUser.save()
    .then(() => res.redirect('back'));
}

function directorsDelete(req, res) {
  Director
    .findById(req.params.id)
    .exec()
    .then((director) => {
      if(!director) return res.status(404).send('Not found');

      return director.remove();
    })
    .then(() => {
      res.redirect('/directors');
    })
    .catch((err) => {
      res.status(500).render('error', { err });
    });
}

function directorsCommentsCreate(req, res) {
  req.body.user = req.currentUser;
  Director
    .findById(req.params.id)
    .exec()
    .then(director => {
      director.comments.push(req.body); // saved the new comment into the array
      return director.save();
    })
    .then(director => res.redirect(`/directors/${director.id}`))
    .catch(err => res.render('error', { err }));
}

function directorsCommentsDelete(req, res) {
  Director
    .findById(req.params.id)
    .exec()
    .then(director => {
      const comment = director.comments.id(req.params.commentId);
      comment.remove();
      return director.save();
    })
    .then(director => res.redirect(`/directors/${director.id}`))
    .catch(err => res.render('error', { err }));
}


module.exports = {
  index: directorsIndex,
  new: directorsNew,
  create: directorsCreate,
  update: directorsUpdate,
  edit: directorsEdit,
  favorite: directorsFavorite,
  delete: directorsDelete,
  commentsCreate: directorsCommentsCreate,
  commentsDelete: directorsCommentsDelete
};
