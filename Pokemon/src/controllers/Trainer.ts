import { NextFunction, Request, Response } from 'express';
import mongoose from 'mongoose';
import Trainer from '../models/Trainer';

const createTrainer = async (req: Request, res: Response, next: NextFunction) => {
    const { name, pokemon } = req.body;

    const trainer = new Trainer({
        _id: new mongoose.Types.ObjectId(),
        name,
        pokemon
    });

    return trainer
        .save()
        .then((trainer) => res.status(201).json({ trainer }))
        .catch((error) => res.status(500).json({ error }));
};

const readTrainer = async (req: Request, res: Response, next: NextFunction) => {
    const trainerId = req.params.trainerId;

    return Trainer.findById(trainerId)
        .populate('pokemon')
        .then((trainer) => (
            trainer
                ? res.status(200).json({ trainer })
                : res.status(404).json({ message: 'not found' }))
        )
        .catch((error) => res.status(500).json({ error }));
};

const readAll = async (req: Request, res: Response, next: NextFunction) => {
    return Trainer.find()
        .then((trainers) => res.status(200).json({ trainers }))
        .catch((error) => res.status(500).json({ error }));
};

const updateTrainer = async (req: Request, res: Response, next: NextFunction) => {
    const trainerId = req.params.trainerId;

    return Trainer.findById(trainerId)
        .then((trainer) => {
            if (trainer) {
                trainer.set(req.body);

                return trainer
                    .save()
                    .then((trainer) => res.status(201).json({ trainer }))
                    .catch((error) => res.status(500).json({ error }));
            } else {
                return res.status(404).json({ message: 'not found' });
            }
        })
        .catch((error) => res.status(500).json({ error }));
};

const deleteTrainer = async (req: Request, res: Response, next: NextFunction) => {
    const trainerId = req.params.trainerId;

    try {
        const trainer = await Trainer.findByIdAndDelete(trainerId);
        return (
            trainer
                ? res.status(201).json({ Trainer: trainer, message: 'Deleted' })
                : res.status(404).json({ message: 'not found' }));
    } catch (error) {
        return res.status(500).json({ error });
    }
};

export default { createTrainer, readTrainer, readAll, updateTrainer, deleteTrainer };