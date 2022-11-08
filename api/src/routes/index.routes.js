const { Router } = require('express');
const router = Router();

const videogames = require('./videogames.routes');
const genres = require('./genres.routes');

router.use('/videogames', videogames);
router.use('/genres', genres);

module.exports = router;
