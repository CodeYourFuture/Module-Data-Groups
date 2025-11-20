const invert = require('./invert.js');

test('inverts object with single key-value pair', () => {
  expect(invert({ a: 1 })).toEqual({ "1": "a" });
});

// Combined test for numeric and string values
test('inverts object with multiple key-value pairs (numeric and string values)', () => {
  expect(invert({ a: 1, b: 2, x: 10, y: 20 })).toEqual({ "1": "a", "2": "b", "10": "x", "20": "y" });
});

test('inverts object with string keys and values', () => {
  expect(invert({ name: "Alice", city: "London" })).toEqual({ 
    "Alice": "name", 
    "London": "city" 
  });
});

test('returns empty object for empty input', () => {
  expect(invert({})).toEqual({});
});
