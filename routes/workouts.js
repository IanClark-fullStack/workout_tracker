const router = require('express').Router();
const db = require('../models');


// GET Route :: Get all Existing Workouts. 
router.get('/api/workouts', (req, res) => {
    // Find all workout data
    db.Workout.aggregate([
        { 
            $addFields: {
                'totalDuration': {
                    $sum: '$exercises.duration'
                },
                'totalWeight': {
                    $sum: '$exercises.weight'
                }
            }
        }
    ])    
    .then(workoutData => {
        res.status(200).json(workoutData);
    })
    .catch(err => {
        res.status(400).json(err);
    });    
});

// GET Route ::  Populates Dashboard - With Existing Workouts in Range
router.get('/api/workouts/range', (req, res) => {
    // Find all workout data
    db.Workout.aggregate([
        { 
            $addFields: {
                'totalDuration': {
                    $sum: '$exercises.duration'
                },
                'totalWeight': {
                    $sum: '$exercises.weight'
                }
            }
        }
    ])
    .sort({ '_id': -1 })
    .limit(7)
    .then(workoutData => {
        res.status(200).json(workoutData);
    })
    .catch(err => {
        res.status(400).json(err);
        console.log(err);
    })    
});

// Then, the data we get back, in the form of an object. The object should be tied to _Id 
// POST Route :: 
router.post('/api/workouts', ({ body }, res) => {
    db.Workout.create(body)
    .then(workoutData => {
        res.status(200).json(workoutData);
    })
    .catch(err => {
        res.status(400).json(err);
    })
});

// PUT Route :: Create an Exercise and Update an Existing Workout by ID
router.put('/api/workouts/:id', (req, res) => {
    db.Workout.findByIdAndUpdate(
        req.params.id, 
        { $push: { exercises: req.body }, $inc: {totalDuration: req.body.duration } }, // Push new values
        { 
            new: true, 
            runValidators: true 
        } 
    )
    // create new exercise with content from req.body
    .then(workoutData => {
        res.status(200).json(workoutData);
    })
    .catch(err => {
        res.status(400).json(err);
    })
});  


// Todo - Create aggregate function to sum together duration for last workout. 
// Todo - Fix for chart display route handler. 


module.exports = router;
