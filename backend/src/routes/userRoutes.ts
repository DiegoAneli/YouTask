import { Router } from 'express';
import { registerUser, authUser } from '../controllers/userController';

const router = Router();

router.post('/register', registerUser);
router.post('/login', authUser);

export default router;
