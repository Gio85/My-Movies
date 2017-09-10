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

module.exports = {
  index: directorsIndex
};
