const { Router } = require('express');
const DevController = require('./controllers/DevController');
const SearchController = require('./controllers/SearchController');

const router = Router();


router.post('/devs', DevController.store);
router.get('/devs', DevController.index);

router.get('/search', SearchController.index);

module.exports = router;

//index, show, store, update, destroy