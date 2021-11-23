const router = require('express').Router();

const staticRoutes = require('./static.js');
const workoutRoutes = require('./workouts.js');

router.use('/', staticRoutes);
router.use('/api', workoutRoutes);

module.exports = router;
