const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const WorkoutSchema = new Schema ({
    day: {
        type: Date,
        default: Date.now
    },
    
    workout: [
        {
            name: {
                type: String,
                trim: true,
                required: "Name of workout:"
            },
            type: {
                type: String,
                trim: true, 
                required: "Type of workout:"
            },
            duration: {
                type: Number, 
                Required: "Duration of workout in minutes:"
            },
            weight: {
                type: Number
            },
            reps: {
                type: Number 
            }, 
            sets: {
                type: Number
            },
            distance: {
                type: Number
            }
        }
    ]
})

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout