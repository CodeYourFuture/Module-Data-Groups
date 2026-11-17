const contains = require("./contains.js");

/*
Implement a function called contains that checks an object contains a
particular property

E.g. contains({a: 1, b: 2}, 'a') // returns true
as the object contains a key of 'a'

E.g. contains({a: 1, b: 2}, 'c') // returns false
as the object doesn't contains a key of 'c'

Arrays are rejected even though JavaScript reports typeof [] as "object".
*/

// Acceptance criteria:

// Given a contains function
// When passed an object and a property name
// Then it should return true if the object contains the property, false otherwise
test('returns true when the object has the property', () => {
	expect(contains({ a: 1, b: 2 }, 'a')).toBe(true);
});

test('returns false for an empty object', () => {
    expect(contains({}, 'a')).toBe(false);
});

// Given an object with properties
// When passed to contains with an existing property name
// Then it should return true
test('given {postCode: "EC1V PT", age: 67, name: "Tester"}, "age": 67, returns true', () => {
    expect(contains({postCode: "EC1V PT", age: 67, name: "Tester"}, 'age')).toBe(true);
});

// Given an object with properties
// When passed to contains with a non-existent property name
// Then it should return false
test('given {postCode: "EC1V PT", age: 67, name: "Tester"}, company: "CYF", returns false', () => {
    expect(contains({postCode: "EC1V PT", age: 67, name: "Tester"}, 'company')).toBe(false);
});

// Given an unsupported value - an array, a string, a number, null,
// undefined, or no argument at all
// When passed to contains
// Then it should throw Error("contains requires an object")
// (careful: typeof [] and typeof null are both "object")
test('throws an error when passed an array', () => {
    expect(() => contains([], 'postCode')).toThrow('contains requires an object');
});

test('throws an error when passed a string', () => {
    expect(() => contains('hello', 'postCode')).toThrow('contains requires an object');
});

test('throws an error when passed a number', () => {
    expect(() => contains(42, 'postCode')).toThrow('contains requires an object');
});

test('throws an error when passed null', () => {
    expect(() => contains(null, 'postCode')).toThrow('contains requires an object');
});

test('throws an error when passed undefined', () => {
    expect(() => contains(undefined, 'postCode')).toThrow('contains requires an object');
});

test('throws when called without arguments', () => {
    expect(() => contains()).toThrow('contains requires an object');
});