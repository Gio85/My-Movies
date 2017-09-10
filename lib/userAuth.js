const User = require('../models/user');

function userAuth(req, res, next){
  // se non troviamo l'user id
  if(!req.session.userId) return next();
  // altriment
  User
    .findById(req.session.userId)
    .then(user => {
      res.locals.isAuthenticated = true;
      res.locals.currentUser = user;
      req.currentUser = user;
      next();
    });
}

module.exports = userAuth;
