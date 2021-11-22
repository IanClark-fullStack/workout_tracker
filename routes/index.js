const router = require('express').Router();

const staticRoutes = require('./static.js');
const apiRoutes = require('./api.js');

router.use('/', staticRoutes);
router.use('/api/workouts', apiRoutes);

module.exports = router;
