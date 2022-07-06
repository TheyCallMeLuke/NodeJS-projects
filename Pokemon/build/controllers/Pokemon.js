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
const Pokemon_1 = __importDefault(require("../models/Pokemon"));
const createPokemon = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { name } = req.body;
    const pokemon = new Pokemon_1.default({
        _id: new mongoose_1.default.Types.ObjectId(),
        name
    });
    return pokemon
        .save()
        .then((pokemon) => res.status(201).json({ pokemon }))
        .catch((error) => res.status(500).json({ error }));
});
const readPokemon = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const pokemonId = req.params.pokemonId;
    return Pokemon_1.default.findById(pokemonId)
        .then((pokemon) => (pokemon ? res.status(200).json({ pokemon }) : res.status(404).json({ message: 'not found' })))
        .catch((error) => res.status(500).json({ error }));
});
const readAll = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const pokemons = yield Pokemon_1.default.find();
        return res.status(200).json({ pokemons });
    }
    catch (error) {
        return res.status(500).json({ error });
    }
});
const updatePokemon = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const pokemonId = req.params.pokemonId;
    return Pokemon_1.default.findById(pokemonId)
        .then((pokemon) => {
        if (pokemon) {
            pokemon.set(req.body);
            return pokemon
                .save()
                .then((pokemon) => res.status(201).json({ pokemon }))
                .catch((error) => res.status(500).json({ error }));
        }
        else {
            return res.status(404).json({ message: 'not found' });
        }
    })
        .catch((error) => res.status(500).json({ error }));
});
const deletePokemon = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const pokemonId = req.params.pokemonId;
    return Pokemon_1.default.findByIdAndDelete(pokemonId)
        .then((pokemon) => (pokemon
        ? res.status(201).json({ pokemon, message: 'Deleted' })
        : res.status(404).json({ message: 'not found' })))
        .catch((error) => res.status(500).json({ error }));
});
exports.default = { createPokemon, readPokemon, readAll, updatePokemon, deletePokemon };
