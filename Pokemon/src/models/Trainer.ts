import mongoose, { Document, Schema } from 'mongoose';

export interface ITrainer {
    name: string;
    pokemon: string;
}

export interface ITrainerModel extends ITrainer, Document {}

const TrainerSchema: Schema = new Schema(
    {
        name: { type: String, required: true },
        pokemon: { type: Schema.Types.ObjectId, required: true, ref: 'Pokemon' }
    },
    {
        versionKey: false
    }
);

export default mongoose.model<ITrainerModel>('Trainer', TrainerSchema);