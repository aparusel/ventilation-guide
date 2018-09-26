const getCoefficients = require('./index.js').getCoefficients;
const calcDewPoint = require('./index.js').calcDewPoint;
const getRecommendation = require('./index.js').getRecommendation;

test('getCoefficients works for temp < 0', () => {
    expect(getCoefficients(-10)).toEqual({
        c1: 17.84362,
        c2: 245.425
    });
});

test('getCoefficients works for temp = 0', () => {
    expect(getCoefficients(0)).toEqual({
        c1: 17.08085,
        c2: 234.175
    });
});

test('getCoefficients works for temp > 0', () => {
    expect(getCoefficients(20)).toEqual({
        c1: 17.08085,
        c2: 234.175
    });
});

test('calcDewPoint(1, 100) == 1', () => {
    expect(calcDewPoint(1, 100)).toBe(1);
});

test('calcDewPoint(25, 50) == 13.86', () => {
    expect(calcDewPoint(25, 50)).toBeCloseTo(13.86, 1);
});

test('calcDewPoint(-10, 59.33) == -16.42', () => {
    expect(calcDewPoint(-10, 59.33)).toBeCloseTo(-16.42, 1);
});

test('getRecommendation works 1', () => {
    expect(getRecommendation(35, 66, 10, 50)).toBe('++');
});

test('getRecommendation works 2', () => {
    expect(getRecommendation(20, 66, 30, 99)).toBe('--');
});

test('getRecommendation works 3', () => {
    expect(getRecommendation(10, 10, 10, 10)).toBe('0');
});