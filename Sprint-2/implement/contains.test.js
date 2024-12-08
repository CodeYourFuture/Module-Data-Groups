const contains = require("./contains.js");

test('return true if a property exists', () => {
    expect(contains({ a: 1, b: 2 }, 'a')).toBe(true); // Should pass
    expect(contains({ a: 1, b: 2 }, 'c')).toBe(false); // Should fail as 'c' doesn't exist
});

test("contains on empty object returns false", () => {
    expect(contains({}, 'a')).toBe(false); // Should pass
});

test("returns false if a invalid parameter exists", () => {
    expect(contains([1,2,3], 'a')).toBe(false); // Should pass
});
