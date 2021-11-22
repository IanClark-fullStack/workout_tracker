const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// Create The Model for Exercise Data, 
const ExerciseSchema = new Schema({
    // Workout Category 
    type: String, 
    // Specific Workout Name 
    type: String, 
    // Duration of 
    type: Number, 
    // Weight Used 
    type: Number,
    // Repitions 
    type: Number,
    // Num of Sets Performmed 
    type: Number,

});


const Exercise = mongoose.model('Exercise', ExerciseSchema);
module.exports = Exercise;