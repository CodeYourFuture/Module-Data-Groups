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
test("when passed an object and a property name, then it should return true if the object contains the property, false otherwise", () => {
    expect(contains({ property1: "property1" }, "property1")).toEqual(true);
    expect(contains({ property1: "property1" }, "property2")).toEqual(false);
});

// Given an empty object
// When passed to contains
// Then it should return false
test("given an empty object passed to contains returns false", () => {
    expect(contains({}, "property")).toEqual(false);
});

// Given an object with properties
// When passed to contains with an existing property name
// Then it should return true
test("given an object with properties, when passed to contains with an existing property name then it should return true", () => {
    expect(contains({ property: "property" }, "property")).toEqual(true);
});

// Given an object with properties
// When passed to contains with a non-existent property name
// Then it should return false
test("given an object with properties, when passed to contains with a non-existing property name then it should return false", () => {
    expect(contains({ property: "property" }, "non-exist")).toEqual(false);
});

// Given invalid parameters like an array
// When passed to contains
// Then it should return false or throw an error
test("given invalid parameters like an array, when passed to contains it should return false or throw an error", () => {
    expect(contains(["property"], "non-exist")).toEqual(false);
});
