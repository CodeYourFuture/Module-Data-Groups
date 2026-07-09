const invert = require('./invert');

test('inverts a single key/value pair', () => {
  expect(invert({ a: 1 })).toEqual({ '1': 'a' });
});

test('inverts multiple pairs', () => {
  expect(invert({ a: 1, b: 2 })).toEqual({ '1': 'a', '2': 'b' });
});

test('string values become keys', () => {
  expect(invert({ a: 'x', b: 'y' })).toEqual({ x: 'a', y: 'b' });
});
