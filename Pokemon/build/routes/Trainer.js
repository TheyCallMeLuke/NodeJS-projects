"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const express_1 = __importDefault(require("express"));
const Trainer_1 = __importDefault(require("../controllers/Trainer"));
const Joi_1 = require("../middleware/Joi");
const router = express_1.default.Router();
router.post('/', (0, Joi_1.ValidateJoi)(Joi_1.Schemas.trainer.create), Trainer_1.default.createTrainer);
router.get('/:trainerId', Trainer_1.default.readTrainer);
router.get('/', Trainer_1.default.readAll);
router.patch('/:trainerId', (0, Joi_1.ValidateJoi)(Joi_1.Schemas.trainer.update), Trainer_1.default.updateTrainer);
router.delete('/:trainerId', Trainer_1.default.deleteTrainer);
module.exports = router;
