// invert.test.js
const invert = require('./invert');

describe('invert', () => {
  it('should invert a single key-value pair', () => {
    expect(invert({ a: 1 })).toEqual({ 1: 'a' });
  });

  it('should invert multiple key-value pairs', () => {
    expect(invert({ a: 1, b: 2 })).toEqual({ 1: 'a', 2: 'b' });
  });

  it('should handle empty objects', () => {
    expect(invert({})).toEqual({});
  });

    it('should handle number keys', () => {
        expect(invert({1: "a", 2: "b"})).toEqual({"a": 1, "b": 2}) //didnt properly handle ints so made the changes for numbers
    })

    it('should handle boolean values', () => {
        expect(invert({a: true, b: false})).toEqual({true: "a", false: "b"})
    })

    it('should handle null and undefined values', () => {
        expect(invert({a: null, b: undefined})).toEqual({null: "a", undefined: "b"})
    })

    it('should handle duplicate values by using the last key', () => {
        expect(invert({a: 1, b: 1, c: 2})).toEqual({1:"b", 2: "c"})
    })
});