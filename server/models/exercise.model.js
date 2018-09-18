import mongoose from 'mongoose'

const ExerciseSchema = new mongoose.Schema({
      name: {
        type: String,
        trim: true,
        required: 'Workout name is required'
      }, 
      description: {
        type: String,
        trim: true,
      }, 
      extra: {
        type: String,
        trim: true,
      },
      sets: {
        type: Number,
        default: 0,
      },
      repetitions: {
        type: Number,
        default: 0,
      },
      previousSets: {
        type: [Number],
      },
      previousRepetitions: {
        type: [Number],
      },
      images: {
        type: [String],
      },
      created: {
        type: Date,
        default: Date.now
      },
      updated: Date
});

export default mongoose.model('Exercise', ExerciseSchema)