import { model, Schema } from "mongoose";

export const HabitLog = model('HabitLog', new Schema({
  date: {
    type: Date,
    required: true
  },
  done: {
    type: Boolean
  },
  habitId: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: 'Habit'
  }
}));

