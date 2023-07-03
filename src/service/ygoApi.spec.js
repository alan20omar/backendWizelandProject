import { jest } from '@jest/globals';
// mocks
// mock axios
const mock_axios = jest.fn();
jest.unstable_mockModule('axios', () => ({
    __esModule: true,
    default: () => mock_axios(),
}));

describe('Test ygoApi.js', () => {
    beforeEach(() => {
        jest.resetAllMocks();
        jest.clearAllMocks();
        jest.resetModules();
    });
    it('should getCards get user', async () => {
        // given
        const mockData = {};
        mock_axios.mockResolvedValueOnce({
            data: {}
        });
        // when
        const {YgoApi: {getCards}} = await import('./ygoApi.js');
        const result = await getCards(mockData);
        // then
        expect(result).toBeDefined();
        expect(mock_axios).toHaveBeenCalledTimes(1);
    });
    it('should getCards get user', async () => {
        // given
        const mockData = undefined;
        mock_axios.mockResolvedValueOnce({
            data: {}
        });
        // when
        const {YgoApi: {getCards}} = await import('./ygoApi.js');
        const result = await getCards(mockData);
        // then
        expect(result).toBeDefined();
        expect(mock_axios).toHaveBeenCalledTimes(1);
    });
    it('should throw error in getCards', async () => {
        // given
        const mockData = {};
        mock_axios.mockRejectedValueOnce({});
        // when
        const {YgoApi: {getCards}} = await import('./ygoApi.js');
        // then
        await expect(getCards(mockData)).rejects.toBeDefined();
        expect(mock_axios).toHaveBeenCalledTimes(1);
    });
});
