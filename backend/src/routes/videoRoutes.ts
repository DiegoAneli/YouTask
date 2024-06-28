import { Router } from 'express';
import { getVideoConferences, startVideoConference } from '../controllers/videoController';

const router: Router = Router();

router.get('/videos', getVideoConferences);
router.post('/videos', startVideoConference);

export default router;
