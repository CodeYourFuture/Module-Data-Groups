const invert = require('./invert')
test("should swap the keys and values in the object", () =>
    expect(invert({ a: 1, b: 2 })).toEqual({ '1': 'a', '2': 'b' }))

test("should swap the keys and values in the object", () =>
    expect(invert({ a: 1 })).toEqual({ '1': 'a' }))