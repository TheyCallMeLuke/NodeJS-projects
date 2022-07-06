import express from 'express';
import controller from '../controllers/Trainer';
import { Schemas, ValidateJoi } from '../middleware/Joi';

const router = express.Router();

router.post('/', ValidateJoi(Schemas.trainer.create), controller.createTrainer);
router.get('/:trainerId', controller.readTrainer);
router.get('/', controller.readAll);
router.patch('/:trainerId', ValidateJoi(Schemas.trainer.update), controller.updateTrainer);
router.delete('/:trainerId', controller.deleteTrainer);

export = router;