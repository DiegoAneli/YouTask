import { Router } from 'express';
import { getDocuments, uploadDocument } from '../controllers/documentController';
import multer from 'multer';

const router: Router = Router();
const upload = multer({ dest: 'uploads/' });

router.get('/documents', getDocuments);
router.post('/documents', upload.single('file'), uploadDocument);

export default router;
