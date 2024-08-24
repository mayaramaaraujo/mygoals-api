import { model, Schema } from "mongoose";

export const Habit = model('Habit', new Schema({
  name: {
    type: String,
    required: true
  },
  userId: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: 'User'
  }
}));

