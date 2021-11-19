const Workout = require('../models/Workout');

const router = require('express').Router();

// GET Route :: Get all Existing Workouts. 
router.get('/exercise', (req, res) => {
    Workout.find({}) 
        .then(dbWorkout => {
            res.json(dbWorkout);
        })
        .catch(err => {
            res.status(400).json(err);
        });
    
    });
// PUT Route :: Update an Existing Workout by ID

// POST Route :: 
router.post('/api/exercise', (req, res) => {
    Workout.create(body)
    .then(dbWorkout => {
        res.json(dbWorkout);
    })
    .catch(err => {
        res.status(400).json(err);
    });
});



module.exports = router;
