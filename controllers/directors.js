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
module.exports = {
  index: directorsIndex,
  new: directorsNew,
  create: directorsCreate
};
