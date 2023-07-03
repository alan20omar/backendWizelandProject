
import mongoose from "mongoose";

const deckSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Types.ObjectId,
        ref: 'user',
        required: true,
    },
    cards: [{
        type: Number,
        require: true,
    }],
}, {
    timestamps: {
        createdAt: 'createdAt',
        updatedAt: 'updatedAt',
    },
});

export const DeckModel = mongoose.model('deck', deckSchema);
