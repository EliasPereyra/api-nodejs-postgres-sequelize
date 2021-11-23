import { Router } from "express";
import { getOneTask, getTasks, getTaskByProject, createTask, updateTask, deleteTask } from '../controllers/task.controller'
const router = Router();

router.post('/', createTask);
router.get('/', getTasks);

router.get('/:id', getOneTask);
router.put('/:id', updateTask);
router.delete('/:id', deleteTask);
router.get('/project/:projectid', getTaskByProject)

export default router;