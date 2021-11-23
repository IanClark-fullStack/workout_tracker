const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const workoutSchema = new Schema({
  day: {
    type: Date,
    default: Date.now
  },
  exercises: [
    {
      type: { type: String, trim: true, require: true },
      // Specific Workout Name
      name: { type: String, trim: true, require: true },
      // Duration of
      duration: { type: Number, require: true },
      // Weight Used
      weight: { type: Number, default: 0 },
      // Repitions
      reps: { type: Number, default: 0 },
      // Num of Sets Performmed
      sets: { type: Number, default: 0 },
      // Distance
      distance: { type: Number, default: 0 }
    },

    // Workout Category
  ],
});

const Workout = mongoose.model("Workout", workoutSchema);
module.exports = Workout;
