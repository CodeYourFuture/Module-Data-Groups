const contains = require("./contains.js");

/*
Implement a function called contains that checks an object contains a
particular property

E.g. contains({a: 1, b: 2}, 'a') // returns true
as the object contains a key of 'a'

E.g. contains({a: 1, b: 2}, 'c') // returns false
as the object doesn't contains a key of 'c'
*/

// Acceptance criteria:

// Given a contains function
// When passed an object and a property name
// Then it should return true if the object contains the property, false otherwise

// Given an empty object
// When passed to contains
// Then it should return false

test("contains on empty object returns false", () => {
    expect(contains({})).toStrictEqual(false)
});


// Given an object with properties
// When passed to contains with an existing property name
// Then it should return true

test("contains on object with an existing property name returns true", () => {
    expect(contains({a: 1, b: 2, c: 3}, 'c')).toStrictEqual(true);
    expect(contains({name: "John Doe", job: "developer"}, 'job')).toStrictEqual(true)
    expect(contains({color: "blue", size: "xxl", madeOf: "China"}, 'madeOf')).toStrictEqual(true);
})

// Given an object with properties
// When passed to contains with a non-existent property name
// Then it should return false

test("contains on object with properties with non-existent property name return false", () => {
    expect(contains({a: 1, b: 2, c: 3}, 'g')).toStrictEqual(false);
    expect(contains({a: 1, b: 2, c: 3}, 'abc')).toStrictEqual(false);
    expect(contains({name: "John Doe", age: 31}, 'job')).toStrictEqual(false);
})

// Given invalid parameters like an array
// When passed to contains
// Then it should return false or throw an error

test("contains on invalid parameters returns false", () => {
    expect(contains(["a", "b", "c"])).toStrictEqual(false);
    expect(contains("I am a string")).toStrictEqual(false);
    expect(contains(777)).toStrictEqual(false);
})

test("contains() handles arrays, strings, null, and undefined safely", () => {
    expect(contains([["a", "b", "c"], "1"])).toBe(false);
    expect(contains(["abc", "1"])).toBe(false);
    expect(contains(null, "1")).toBe(false);
    expect(contains(undefined, "1")).toBe(false);
})
