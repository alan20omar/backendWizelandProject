import { jest } from '@jest/globals';
// mocks
// mock models
const mock_DeckModel = jest.fn();
const mock_UserModel = jest.fn();
jest.unstable_mockModule('../models/index.js', () => ({
    __esModule: true,
    DeckModel: mock_DeckModel(),
    UserModel: mock_UserModel(),
}));
// mock service
const mock_getCards = jest.fn();
jest.unstable_mockModule('./index.js', () => ({
    __esModule: true,
    YgoApi: {
        getCards: () => mock_getCards(),
    },
}));

describe('Test deckService.js', () => {
    beforeEach(() => {
        jest.resetAllMocks();
        jest.clearAllMocks();
        jest.resetModules();
    });
    it('should getUserDeck get save deck', async () => {
        // given
        const mockData = {
            userId: 'test-userId',
        };
        mock_DeckModel.mockReturnValueOnce({
            findOne: () => Promise.resolve({
                _doc: {
                    cards: [1,2,3],
                },
            }),
        });
        mock_getCards.mockResolvedValueOnce({
            data: [
                {
                    id: 1
                },
                {
                    id: 2
                },
                {
                    id: 3
                },
            ]
        });
        // when
        const {DeckService: {getUserDeck}} = await import('./deckService.js');
        const result = await getUserDeck(mockData);
        // then
        expect(result).toBeDefined();
        expect(mock_DeckModel).toHaveBeenCalledTimes(1);
        expect(mock_getCards).toHaveBeenCalledTimes(1);
    });
    it('should getAllDecks get 0 save deck', async () => {
        // given
        mock_DeckModel.mockReturnValueOnce({
            find: () => Promise.resolve([]),
        });
        // when
        const {DeckService: {getAllDecks}} = await import('./deckService.js');
        const result = await getAllDecks();
        // then
        expect(result).toBeDefined();
        expect(mock_DeckModel).toHaveBeenCalledTimes(1);
    });
    it('should getAllDecks get 1 save deck', async () => {
        // given
        mock_DeckModel.mockReturnValueOnce({
            find: () => Promise.resolve([{
                _doc: {
                    userName: '',
                    cards: [1, 2, 3],
                }
            }]),
        });
        mock_UserModel.mockReturnValueOnce({
            findOne: () => Promise.resolve([{
                name: 'name-test'
            }]),
        });
        mock_getCards.mockResolvedValueOnce({
            data: [
                {
                    id: 1
                },
                {
                    id: 2
                },
                {
                    id: 3
                },
            ]
        });
        // when
        const {DeckService: {getAllDecks}} = await import('./deckService.js');
        const result = await getAllDecks();
        // then
        expect(result).toBeDefined();
        expect(mock_DeckModel).toHaveBeenCalledTimes(1);
        expect(mock_UserModel).toHaveBeenCalledTimes(1);
        expect(mock_getCards).toHaveBeenCalledTimes(1);
    });
    it('should addCardToDeck add cardId', async () => {
        // given
        const mockData = {
            _id: 'test-_id',
            userId: 'test-userId',
            cartaId: 4,
        };
        mock_DeckModel.mockReturnValueOnce({
            findOne: () => Promise.resolve({
                cards: [1,2,3],
                save: () => ({}),
            }),
        });
        // when
        const {DeckService: {addCardToDeck}} = await import('./deckService.js');
        const result = await addCardToDeck(mockData);
        // then
        expect(result).toBeDefined();
        expect(mock_DeckModel).toHaveBeenCalledTimes(1);
    });
    it('should removeCardOfDeck remove cardId', async () => {
        // given
        const mockData = {
            _id: 'test-_id',
            userId: 'test-userId',
            cartaId: 3,
        };
        mock_DeckModel.mockReturnValueOnce({
            findOne: () => Promise.resolve({
                cards: [1,2,3],
                save: () => ({}),
            }),
        });
        // when
        const {DeckService: {removeCardOfDeck}} = await import('./deckService.js');
        const result = await removeCardOfDeck(mockData);
        // then
        expect(result).toBeDefined();
        expect(mock_DeckModel).toHaveBeenCalledTimes(1);
    });
});
