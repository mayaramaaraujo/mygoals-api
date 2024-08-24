import { Request, Response } from "express";
import { Habit } from "../../models/Habit";

export async function deleteHabit(req: Request, res: Response) {
  try {
    const { habitId } = req.params;
    await Habit.findByIdAndDelete(habitId);
    res.sendStatus(204);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
}
