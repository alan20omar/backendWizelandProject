import { DeckModel, UserModel } from '../models/index.js';
import { YgoApi } from '../service/index.js';

export const DeckService = {
    getUserDeck: async ({userId, _id}) => {
        userId = _id ?? userId;
        let deck = await DeckModel.findOne({userId});
        if (!deck && !_id) {
            return DeckModel({userId, cards: []}).save();
        }
        deck = deck._doc;
        if (deck.cards.length) {
            const params = {
                id: deck.cards.reduce((prev, sig) => {
                    prev += `,${sig}`;
                    return prev;
                }),
            };
            deck.cards = await YgoApi.getCards(params)
                .then(res => {
                    return deck.cards.map(cardId => res.data.find(({id}) => id === cardId))
                });
        }
        return deck;
    },
    getAllDecks: async () => {
        const decks = await DeckModel.find();
        return Promise.all(decks.map(async deck => {
            deck = deck._doc;
            deck.userName = await UserModel.findOne({_id: deck.userId}).then(({name})=>name);
            if (deck.cards.length) {
                const params = {
                    id: deck.cards.reduce((prev, sig) => {
                        prev += `,${sig}`;
                        return prev;
                    }),
                };
                deck.cards = await YgoApi.getCards(params)
                .then(res => {
                    return deck.cards.map(cardId => res.data.find(({id}) => id === cardId))
                });
            }
            console.log(deck)
            return deck;
        })).then(res => res.filter(deck => deck.cards.length));
    },
    addCardToDeck: async ({_id, userId, cartaId}) => {
        const deck = await DeckModel.findOne({_id});
        if (!deck?.cards) {
            return DeckModel({userId, cards: [cartaId]}).save();
        }
        deck.cards.push(cartaId);
        deck.cards = deck.cards.sort();
        return deck.save();
    },
    removeCardOfDeck: async ({_id, cartaId}) => {
        const deck = await DeckModel.findOne({_id});
        console.log(_id, cartaId, deck.cards)
        const index = deck.cards.findIndex(carta => carta === Number(cartaId));
        deck.cards.splice(index, 1);
        console.log(index)
        return deck.save();
    },
};
