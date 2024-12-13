const invert = require('./invert');

test('should invert a single key-value pair', () => {
    expect(invert({ a: 1 })).toEqual({ "1": "a" });
});

test('should invert multiple key-value pairs', () => {
    expect(invert({ a: 1, b: 2 })).toEqual({ "1": "a", "2": "b" });
});

test('should handle numeric keys and values', () => {
    expect(invert({ 10: "x", 20: "y" })).toEqual({ x: "10", y: "20" });
});

test('should handle mixed types in the object', () => {
    expect(invert({ foo: "bar", baz: 42 })).toEqual({ bar: "foo", "42": "baz" });
});

test('should return an empty object when given an empty object', () => {
    expect(invert({})).toEqual({});
});

test('should handle duplicate values by overwriting earlier keys', () => {
    expect(invert({ a: 1, b: 1 })).toEqual({ "1": "b" }); // Later key overwrites the earlier one
});

test('should handle keys with special characters', () => {
    expect(invert({ "@key": 123, "#hash": 456 })).toEqual({ "123": "@key", "456": "#hash" });
});