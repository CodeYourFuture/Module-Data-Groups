const invert = require('./invert');
test('invert  a single key-value pair', () => {
    expect(invert({ a: 1 })).toEqual({ '1': 'a' });
});


test('invert multiple key-value pairs', () => {
    expect(invert({ a: 1, b: 2 })).toEqual({ '1': 'a', '2': 'b' });
});


test("invert string value as key input ", () => {
    expect(invert({ a: "apple", b: "banana" })).toEqual({ apple: "a", banana: "b" });
});


test ("returns empty object when input is empty", () => {
    expect(invert({})).toEqual({});
});

test("invert with numeric keys", () => {
    expect(invert({ 1: 'one', 2: 'two' })).toEqual({ one: '1', two: '2' });
});

