const User = require('../models/user');

function usersShow(req, res) {
  User
    .findById(req.params.id)
    .populate('movies favorites')
    .exec()
    .then(user => res.render('users/show', { user , activeF: true}))
    .catch(err => res.render('error', { err }));
}

function usersDelete(req, res) {
  User
    .findById(req.params.id)
    .exec()
    .then(user => user.remove())
    .catch(err => res.render('error', { err }));
}

module.exports = {
  show: usersShow,
  delete: usersDelete
};
