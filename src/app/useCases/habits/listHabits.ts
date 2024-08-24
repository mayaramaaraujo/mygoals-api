import { Request, Response } from "express";
import { Habit } from "../../models/Habit";

export async function listHabits(req: Request, res: Response) {
  try {
    const { userId } = req.params;
    const habits = await Habit.find({ userId: userId }).populate('HabitLog');
    res.json(habits);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
}
