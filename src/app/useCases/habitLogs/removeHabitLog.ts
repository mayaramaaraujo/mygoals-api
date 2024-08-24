import { Request, Response } from "express";
import { HabitLog } from "../../models/HabitLog";

export async function removeHabitLog(req: Request, res: Response) {
  try {
    const { habitId } = req.params;
    const { habitLogId } = req.params;

    const habitLog = await HabitLog.findByIdAndUpdate({ _id: habitLogId, habitId: habitId }, { done: false });
    res.json(habitLog);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
}
