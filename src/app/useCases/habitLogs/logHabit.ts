import { Request, Response } from "express";
import { HabitLog } from "../../models/HabitLog";

export async function logHabit(req: Request, res: Response) {
  try {
    const { date, done } = req.body;
    const { habitId } = req.params;

    const habitLog = await HabitLog.create({ date, done, habitId });
    res.status(201).json(habitLog);
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
}
