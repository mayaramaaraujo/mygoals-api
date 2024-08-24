import { Request, Response } from "express";
import { HabitLog } from "../../models/HabitLog";

export async function listHabitLogs(req: Request, res: Response) {
  try {
    const { habitId } = req.params;

    const habitLogs = await HabitLog.find()
      .sort({ date: 1 })
      .where('habitId')
      .equals(habitId);

    res.status(200).json(habitLogs);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
}
