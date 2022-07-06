import mongoose, { Document, Schema } from 'mongoose';

export interface IPokemon {
    name: string;
    skill: string;
}

export interface IPokemonModel extends IPokemon, Document {}

const PokemonSchema: Schema = new Schema(
    {
        name: { type: String, required: true },
        skill: { type: String, required: true }
    },
    {
        versionKey: false
    }
);

export default mongoose.model<IPokemonModel>('Pokemon', PokemonSchema);