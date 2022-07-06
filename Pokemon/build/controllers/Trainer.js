"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const Trainer_1 = __importDefault(require("../models/Trainer"));
const createTrainer = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, pokemon } = req.body;
    const trainer = new Trainer_1.default({
        _id: new mongoose_1.default.Types.ObjectId(),
        name,
        pokemon
    });
    return trainer
        .save()
        .then((trainer) => res.status(201).json({ trainer }))
        .catch((error) => res.status(500).json({ error }));
});
const readTrainer = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const trainerId = req.params.trainerId;
    return Trainer_1.default.findById(trainerId)
        .populate('pokemon')
        .then((trainer) => (trainer
        ? res.status(200).json({ trainer })
        : res.status(404).json({ message: 'not found' })))
        .catch((error) => res.status(500).json({ error }));
});
const readAll = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    return Trainer_1.default.find()
        .then((trainers) => res.status(200).json({ trainers }))
        .catch((error) => res.status(500).json({ error }));
});
const updateTrainer = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const trainerId = req.params.trainerId;
    return Trainer_1.default.findById(trainerId)
        .then((trainer) => {
        if (trainer) {
            trainer.set(req.body);
            return trainer
                .save()
                .then((trainer) => res.status(201).json({ trainer }))
                .catch((error) => res.status(500).json({ error }));
        }
        else {
            return res.status(404).json({ message: 'not found' });
        }
    })
        .catch((error) => res.status(500).json({ error }));
});
const deleteTrainer = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const trainerId = req.params.trainerId;
    try {
        const trainer = yield Trainer_1.default.findByIdAndDelete(trainerId);
        return (trainer
            ? res.status(201).json({ Trainer: trainer, message: 'Deleted' })
            : res.status(404).json({ message: 'not found' }));
    }
    catch (error) {
        return res.status(500).json({ error });
    }
});
exports.default = { createTrainer, readTrainer, readAll, updateTrainer, deleteTrainer };
