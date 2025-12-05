const invert = require('./invert');

describe('invert', () => {
  test('inverts a single key', () => {
    expect(invert({ a: 1 })).toEqual({ '1': 'a' });
  });

  test('inverts multiple keys', () => {
    expect(invert({ a: 1, b: 2 })).toEqual({ '1': 'a', '2': 'b' });
  });

  test('duplicate values: last key wins', () => {
    expect(invert({ a: 1, b: 1 })).toEqual({ '1': 'b' });
  });

  test('non-object inputs return empty object', () => {
    expect(invert(null)).toEqual({});
    expect(invert(undefined)).toEqual({});
    expect(invert(123)).toEqual({});
    expect(invert([1, 2, 3])).toEqual({});
  });
});
