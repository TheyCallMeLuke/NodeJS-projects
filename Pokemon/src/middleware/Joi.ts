import Joi, { ObjectSchema } from 'joi';
import { NextFunction, Request, Response } from 'express';
import { IPokemon } from '../models/Pokemon';
import { ITrainer } from '../models/Trainer';
import Logging from '../library/Logging';

export const ValidateJoi = (schema: ObjectSchema) => {
    return async (req: Request, res: Response, next: NextFunction) => {
        try {
            await schema.validateAsync(req.body);
            next();
        } catch (error) {
            Logging.error(error);
            return res.status(422).json({ error });
        }
    };
};

export const Schemas = {
    pokemon: {
        create: Joi.object<IPokemon>({
            name: Joi.string().required(),
            skill: Joi.string().required()
        }),
        update: Joi.object<IPokemon>({
            name: Joi.string().required(),
            skill: Joi.string().required()
        })
    },
    trainer: {
        create: Joi.object<ITrainer>({
            name: Joi.string().required(),
            pokemon: Joi.string()
                .regex(/^[0-9a-fA-F]{24}$/)
                .required()
        }),
        update: Joi.object<ITrainer>({
            name: Joi.string().required(),
            pokemon: Joi.string()
                .regex(/^[0-9a-fA-F]{24}$/)
                .required()
        })
    }
};