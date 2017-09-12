const Director = require('../models/director');


function directorsIndex(req, res) {
  Director
    .find()
    .populate('user')
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

function directorsEdit(req, res) {
  Director
    .findById(req.params.id)
    .exec()
    .then(director => res.render('directors/edit', { director }))
    .catch(err => res.status(500).render('error', { err })
    );
}

function directorsUpdate(req, res) {
  Director
    .findById(req.params.id)
    .exec()
    .then(director => {
      director = Object.assign(director, req.body);
      return director.save();
    })
    .then(() => res.redirect('/directors'))
    .catch(err => {
      res.status(500).render('error', { err });
    });
}


function directorsDelete(req, res) {
  Director
    .findById(req.params.id)
    .exec()
    .then((director) => {
      if(!director) return res.status(404).send('Not found');
      return director.remove();
    })
    .then(() => res.redirect('/directors'))
    .catch((err) => {
      res.status(500).render('error', { err });
    });
}

module.exports = {
  index: directorsIndex,
  new: directorsNew,
  create: directorsCreate,
  update: directorsUpdate,
  edit: directorsEdit,
  delete: directorsDelete
};
