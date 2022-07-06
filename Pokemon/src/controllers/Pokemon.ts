import { NextFunction, Request, Response } from 'express';
import mongoose from 'mongoose';
import Pokemon from '../models/Pokemon';

const createPokemon = async (req: Request, res: Response, next: NextFunction) => {
    const { name, skill } = req.body;
    const pokemon = new Pokemon({
        _id: new mongoose.Types.ObjectId(),
        name,
        skill
    });
    return pokemon
        .save()
        .then((pokemon) => res.status(201).json({ pokemon }))
        .catch((error) => res.status(500).json({ error }));
};

const readPokemon = async (req: Request, res: Response, next: NextFunction) => {
    const pokemonId = req.params.pokemonId;
    return Pokemon.findById(pokemonId)
        .then((pokemon) => (pokemon ? res.status(200).json({ pokemon }) : res.status(404).json({ message: 'not found' })))
        .catch((error) => res.status(500).json({ error }));
};

const readAll = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const pokemons = await Pokemon.find();
        return res.status(200).json({ pokemons });
    } catch (error) {
        return res.status(500).json({ error });
    }
};

const updatePokemon = async (req: Request, res: Response, next: NextFunction) => {
    const pokemonId = req.params.pokemonId;
    return Pokemon.findById(pokemonId)
        .then((pokemon) => {
            if (pokemon) {
                pokemon.set(req.body);

                return pokemon
                    .save()
                    .then((pokemon) => res.status(201).json({ pokemon }))
                    .catch((error) => res.status(500).json({ error }));
            } else {
                return res.status(404).json({ message: 'not found' });
            }
        })
        .catch((error) => res.status(500).json({ error }));
};

const deletePokemon = async (req: Request, res: Response, next: NextFunction) => {
    const pokemonId = req.params.pokemonId;
    return Pokemon.findByIdAndDelete(pokemonId)
        .then((pokemon) => (
            pokemon
                ? res.status(201).json({ pokemon, message: 'Deleted' })
                : res.status(404).json({ message: 'not found' }))
        )
        .catch((error) => res.status(500).json({ error }));
};

export default { createPokemon, readPokemon, readAll, updatePokemon, deletePokemon };