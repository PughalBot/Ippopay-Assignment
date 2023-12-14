const minimizeDifference = require('./minimizeDifference');

test('nums = [3, 9, 7, 3] should return 2', () => {
    expect(minimizeDifference([3, 9, 7, 3])).toBe(2);
});

test('nums = [-36, 36] should return 72', () => {
    expect(minimizeDifference([-36, 36])).toBe(72);
});

test('nums = [2, -1, 0, 4, -2, -9] should return 0', () => {
    expect(minimizeDifference([2, -1, 0, 4, -2, -9])).toBe(0);
});
