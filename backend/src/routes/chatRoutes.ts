import { Router } from 'express';
import { getMessages, sendMessage } from '../controllers/chatController';

const router: Router = Router();

router.get('/messages', getMessages);
router.post('/messages', sendMessage);

export default router;
