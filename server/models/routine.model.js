import mongoose from 'mongoose';

const ExerciseSchema = new mongoose.Schema({
  name: {
    type: String,
    trim: true,
    required: 'Exercise name is required',
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
    type: Number,
  },
  previousWeights: {
    type: [Number],
  },
  currentRepetitions: {
    type: Number,
  },
  previousRepetitions: {
    type: [Number],
  },
  images: {
    type: [String],
  },
  muscles: {
    type: [Number],
  },
  muscles_secondary: {
    type: [Number],
  },
  created: {
    type: Date,
    default: Date.now,
  },
  updated: Date,
}, { toObject: { versionKey: false } });

const WorkoutSchema = new mongoose.Schema({
  name: {
    type: String,
    trim: true,
    required: 'Workout name is required',
  },
  exercises: [ExerciseSchema],
  created: {
    type: Date,
    default: Date.now,
  },
}, { toObject: { versionKey: false } });


const RoutineSchema = new mongoose.Schema({
  userId: {
    type: String,
    required: 'Authenticated user is required',
  },
  name: {
    type: String,
    trim: true,
    required: 'Routine name is required',
  },
  workouts: [WorkoutSchema],
  created: {
    type: Date,
    default: Date.now,
  },
  updated: Date,
}, { toObject: { versionKey: false } });


export default mongoose.model('Routine', RoutineSchema);
