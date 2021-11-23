import { Router } from "express";
import { createProject, getProjects, getOneProject, updateProject, deleteProject } from "../controllers/project.controller";

const router = Router();

router.post('/', createProject)
router.get('/', getProjects)

router.get('/:id', getOneProject)
router.put('/:id', updateProject)
router.delete('/:id', deleteProject)

export default router;