const contains = require("./contains.js");
function contains(obj, key) {
    return obj.hasOwnProperty(key);
}

test.todo("contains on empty object returns false");


const { test, expect } = require("@jest/globals");

// Given an empty object
// When passed to contains
// Then it should return false
test("contains on empty object returns false", () => {
    expect(contains({}, "key")).toBe(false);
});

// Given an object with properties
// When passed to contains with an existing property name
// Then it should return true
test("contains with existing property returns true", () => {
    expect(contains({ a: 1, b: 2 }, "a")).toBe(true);
});

// Given an object with properties
// When passed to contains with a non-existent property name
// Then it should return false
test("contains with non-existent property returns false", () => {
    expect(contains({ a: 1, b: 2 }, "c")).toBe(false);
});

// Given invalid parameters like an array
// When passed to contains
// Then it should return false or throw an error
test("contains with invalid parameters returns false", () => {
    expect(() => contains([], "key")).toThrow();
    expect(() => contains(null, "key")).toThrow();
    expect(() => contains(undefined, "key")).toThrow();
});