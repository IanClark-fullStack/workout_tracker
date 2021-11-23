const router = require('express').Router();
const Workout = require('../models/Workout');


// GET Route :: Get all Existing Workouts. 
router.get('/api/workouts', (req, res) => {
    // Find all workout data
    Workout.aggregate([{ 
        $addFields: {
            totalDuration: {
                $sum: '$exercises.duration'
            }
        }
    }]) 
        
    .then((dbWorkout) => {
        res.status(200).json(dbWorkout);
    })
    .catch((err) => {
        res.status(400).json(err);
    });    
});

// GET Route ::  Populates Dashboard - With Existing Workouts in Range
router.get('/api/workouts/range', (req, res) => {
    // Find all workout data
    Workout.aggregate([{ 
        $addFields: {
            totalDuration: {
                $sum: '$exercises.duration'
            }
        }
    }])
        .sort({ _id: -1 })
        .limit(7)
        .then((dbWorkout) => {
            res.status(200).json(dbWorkout);
        })
        .catch((err) => {
            res.status(400).json(err);
        })    
});
// Then, the data we get back, in the form of an object. The object should be tied to _Id 
// POST Route :: 
router.post('/api/workouts', (req, res) => {
    Workout.create()
    .then((dbWorkout) => {
        res.status(200).json(dbWorkout);
    })
    .catch((err) => {
        res.status(400).json(err);
    });
});

// PUT Route :: Create an Exercise and Update an Existing Workout by ID
router.put('/api/workouts/:id', ({ body, params}, res) => {
    Workout.findByIdAndUpdate(
        params.id, 
        { 
            $push: { exercises: body }, 
            $inc: {totalDuration: body.duration } 
        }, // Push new values
        { 
            new: true, 
            runValidators: true 
        } // New set to true 
    )
    // create new exercise with content from req.body
    .then((workoutData) => {
        res.status(200).json(workoutData);
    })
    .catch((err) => {
        res.status(400).json(err);
    })
});




// Todo - Create aggregate function to sum together duration for last workout. 
// Todo - Fix for chart display route handler. 


module.exports = router;
