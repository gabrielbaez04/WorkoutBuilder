import mongoose from 'mongoose'

const Exercise = new mongoose.Schema({
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
  },
  repetitions: {
    type: Number,
  },
  currentWeight: {
    type: Number
  },
  previousWeights: {
    type: [Number],
  },
  currentRepetitions:{
    type:Number
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


const WorkoutSchema = new mongoose.Schema({
    userId: {
        type: String,
        required: 'Authenticated user is required'
      },
      name: {
        type: String,
        trim: true,
        required: 'Workout name is required'
      },  
      exercises:[Exercise],
      created: {
        type: Date,
        default: Date.now
      },
      updated: Date
});


export default mongoose.model('Workout', WorkoutSchema)