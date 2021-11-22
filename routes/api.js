const db = require('../models');

const router = require('express').Router();

// GET Route :: Get all Existing Workouts. 
router.get('/', (req, res) => {
    // Find all workout data
    db.Workout.find({}) 
        // Populate by targeting the Exercise field on the call
        .populate('exercises')
        .then(dbWorkout => {
            res.json(dbWorkout);
        })
        .catch(err => {
            res.status(400).json(err);
        });
    
    });
// GET Route :: Get all Existing Workouts in Range
router.get('/range', (req, res) => {
    // Find all workout data
    db.Workout.find({}) 
        // Populate by targeting the exercises field on the model
        .populate('exercises')
        .then(dbWorkout => {
            res.json(dbWorkout);
        })
        .catch(err => {
            res.status(400).json(err);
        })
    
    });
// PUT Route :: Update an Existing Workout by ID
router.put('/:id', (req, res) => {
    // const refId = req.params.id;
    // create new exercise with content from req.body
    db.Exercise.create(req.body) 
    .then(({ _id }) => 
        db.Workout.findOneAndUpdate(
            { _id: req.body.id },
            { $push: { exercises: _id } }, // Push new values
            { new: true } // New set to true 
        )
    )
    .then((workoutData) => {
        res.json(workoutData);
    })
    .catch((err) => {
        res.json(err);
    })
});

    // Then, the data we get back, in the form of an object. The object should be tied to _Id 
// POST Route :: 
router.post('/', (req, res) => {
    db.Workout.create(req.body)
    .then(dbWorkout => {
        res.json(dbWorkout);
    })
    .catch(err => {
        res.status(400).json(err);
    });
});



module.exports = router;
