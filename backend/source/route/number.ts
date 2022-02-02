import Router from 'express';
import controller from '../controller/calculator';

const router = Router();

router.get('/number', controller.getNumber);
router.post('/number/:number', controller.storeNumber);

export = router;
