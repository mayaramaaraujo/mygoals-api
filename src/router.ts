import { Router } from "express";
import { listHabits } from "./app/useCases/habits/listHabits";
import { createHabit } from "./app/useCases/habits/createHabit";
import { createUser } from "./app/useCases/users/createUser";
import { logHabit } from "./app/useCases/habitLogs/logHabit";
import { listHabitLogs } from "./app/useCases/habitLogs/listHabitLogs";
import { removeHabitLog } from "./app/useCases/habitLogs/removeHabitLog";
import { deleteHabit } from "./app/useCases/habits/deleteHabit";
import { deleteUser } from "./app/useCases/users/deleteUser";

export const router = Router();

router.post('/users', createUser);
router.delete('/users/:userId', deleteUser);

router.post('/users/:userId/habits', createHabit);
router.get('/users/:userId/habits', listHabits);

router.delete('/habits/:habitId', deleteHabit);
router.post('/habits/:habitId/habitLogs', logHabit);
router.get('/habits/:habitId/habitLogs', listHabitLogs);
router.delete('/habits/:habitId/habitLogs/:habitLogId', removeHabitLog);

