const router = require('express').Router();
const secureRoute = require('../lib/secureRoute');

const movies = require('../controllers/movies');
const directors = require('../controllers/directors');
const users = require('../controllers/users');
const registrations = require('../controllers/registrations');
const sessions = require('../controllers/sessions');

router.get('/', (req, res) => res.render('home', { isHomepage: true }));

router.route('/directors')
  .get(directors.index)
  .post(secureRoute, directors.create);


router.route('/directors/new')
  .get(secureRoute, directors.new);

router.route('/movies')
  .get(movies.index)
  .post(secureRoute, movies.create);

router.route('/movies/new')
  .get(secureRoute, movies.new);

router.route('/movies/:id')
  .get(movies.show)
  .put(secureRoute, movies.update)
  .delete(secureRoute, movies.delete);

router.route('/movies/:id/edit')
  .get(secureRoute, movies.edit);

router.route('/directors/:id/edit')
  .get(secureRoute, directors.edit);

router.route('/directors/:id')
  .put(secureRoute, directors.update)
  .delete(secureRoute, directors.delete);

router.route('/movies/:id/favorite')
  .post(secureRoute, movies.favorite);

router.post('/movies/:id/comments', secureRoute, movies.commentsCreate);
router.delete('/movies/:id/comments/:commentId', secureRoute, movies.commentsDelete);

router.route('/register')
  .get(registrations.new)
  .post(registrations.create);

router.route('/login')
  .get(sessions.new)
  .post(sessions.create);

router.route('/users/:id')
  .get(users.show)
  .delete(secureRoute, users.delete);

router.get('/logout', sessions.delete);


module.exports = router;
