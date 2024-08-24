import { Request, Response } from "express";
import { Habit } from "../../models/Habit";

export async function createHabit(req: Request, res: Response) {
  try {
    const { name } = req.body;
    const { userId } = req.params;

    const habit = await Habit.create({ name, userId });
    res.status(201).json(habit);
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
}
