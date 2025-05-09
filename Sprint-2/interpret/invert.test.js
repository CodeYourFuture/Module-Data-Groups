const invert = require("./invert.js");

describe('invert function', () => {
  test('should invert a simple object', () => {
    expect(invert({ x: 10, y: 20 })).toEqual({ '10': 'x', '20': 'y' });
  });

  test('should handle a single key-value pair', () => {
    expect(invert({ a: 1 })).toEqual({ '1': 'a' });
  });

  test('should handle duplicate values by keeping the last key', () => {
    expect(invert({ a: 1, b: 1, c: 2 })).toEqual({ '1': 'b', '2': 'c' });
  });

  test('should handle an empty object', () => {
    expect(invert({})).toEqual({});
  });

  test('should convert non-string keys to string', () => {
    expect(invert({ 42: 'answer', true: 'yes' })).toEqual({ answer: '42', yes: 'true' });
  });
});
