import express from 'express';
import controller from '../controllers/Pokemon';
import { Schemas, ValidateJoi } from '../middleware/Joi';

const router = express.Router();

router.post('/', ValidateJoi(Schemas.pokemon.create), controller.createPokemon);
router.get('/:pokemonId', controller.readPokemon);
router.get('/', controller.readAll);
router.patch('/:pokemonId', ValidateJoi(Schemas.pokemon.update), controller.updatePokemon);
router.delete('/:pokemonId', controller.deletePokemon);

export = router;