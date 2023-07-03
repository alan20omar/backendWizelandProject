import { jest } from '@jest/globals';
// mocks
// mock io
const mock_socket = jest.fn();
jest.unstable_mockModule('../config/socket.js', () => ({
    __esModule: true,
    default: {
        to: () => mock_socket(),
    },
}));

describe('Test favoriteService.js', () => {
    beforeEach(() => {
        jest.resetAllMocks();
        jest.clearAllMocks();
        jest.resetModules();
    });
    it('should notiFavorite notify user', async () => {
        // given
        const mockData = {
            name: 'test-name',
            likedUser: 'test-likedUser',
        };
        mock_socket.mockReturnValueOnce({
            emit: () => ({}),
        });
        // when
        const {FavoriteService: {notiFavorite}} = await import('./favoriteService.js');
        const result = notiFavorite(mockData);
        // then
        expect(result).toBeDefined();
        expect(mock_socket).toHaveBeenCalledTimes(1);
    });
});
