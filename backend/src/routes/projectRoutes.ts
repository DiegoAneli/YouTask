import { Router } from 'express';
import {
  getProjects,
  createProject,
  getProjectById,
  updateProject,
  deleteProject,
} from '../controllers/projectController';

const router = Router();

router.get('/', getProjects);
router.post('/', createProject);
router.get('/:id', getProjectById);
router.put('/:id', updateProject);
router.delete('/:id', deleteProject);

export default router;
