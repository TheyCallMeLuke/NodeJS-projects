"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const express_1 = __importDefault(require("express"));
const Pokemon_1 = __importDefault(require("../controllers/Pokemon"));
const Joi_1 = require("../middleware/Joi");
const router = express_1.default.Router();
router.post('/', (0, Joi_1.ValidateJoi)(Joi_1.Schemas.pokemon.create), Pokemon_1.default.createPokemon);
router.get('/:pokemonId', Pokemon_1.default.readPokemon);
router.get('/', Pokemon_1.default.readAll);
router.patch('/:pokemonId', (0, Joi_1.ValidateJoi)(Joi_1.Schemas.pokemon.update), Pokemon_1.default.updatePokemon);
router.delete('/:pokemonId', Pokemon_1.default.deletePokemon);
module.exports = router;
