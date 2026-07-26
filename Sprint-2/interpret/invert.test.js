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

test('collects multiple keys that share the same value', () => {
  const input = { a: 1, b: 1, c: 2 };
  const actual = invert(input);
  expect(actual["1"]).toEqual(expect.arrayContaining(["a", "b"]));
  expect(actual["2"]).toBe("c");
});