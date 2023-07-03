import { jest } from '@jest/globals';
// mocks
// mock models
const mock_UserModel = jest.fn();
jest.unstable_mockModule('../models/index.js', () => ({
    __esModule: true,
    UserModel: mock_UserModel(),
}));

describe('Test userService.js', () => {
    beforeEach(() => {
        jest.resetAllMocks();
        jest.clearAllMocks();
        jest.resetModules();
    });
    it('should getUser get user', async () => {
        // given
        const mockData = {
            name: 'test-name',
        };
        mock_UserModel.mockReturnValueOnce({
            findOne: () => Promise.resolve({}),
        });
        // when
        const {UserService: {getUser}} = await import('./userService.js');
        const result = await getUser(mockData);
        // then
        expect(result).toBeDefined();
        expect(mock_UserModel).toHaveBeenCalledTimes(1);
    });
    it('should throw error in getUser', async () => {
        // given
        const mockData = {};
        mock_UserModel.mockReturnValueOnce({
            findOne: () => Promise.resolve({}),
        });
        // when
        const {UserService: {getUser}} = await import('./userService.js');;
        // then
        await expect(getUser(mockData)).rejects.toBeDefined();
        expect(mock_UserModel).toHaveBeenCalledTimes(1);
    });
});
