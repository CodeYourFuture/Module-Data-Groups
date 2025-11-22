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
test.todo("contains on empty object returns false");
test("When the object contains the property return true, false otherwise", () => {
    expect(contains({a: 1, b: 2, c: 3}, "a")).toBe(true);
    expect(contains({a: 1, b: 2, c: 3}, "d")).toBe(false);
})

// Given an empty object
// When passed to contains
// Then it should return false
test.todo("contains on empty object returns false");
test("if contains on empty object returns false", () => {
    expect(contains({}, "a")).toBe(false);
    expect(contains({}, "Hello")).toBe(false);
});

// Given an object with properties
// When passed to contains with an existing property name
// Then it should return true
test.todo("if contains on object with existing property returns true");
test("if contains on object with existing property returns true", () => {
    expect(contains({m: 10, s: 20, w: 5}, "s")).toBe(true);
    expect(contains({x: 100, y: 200, z: 300}, "z")).toBe(true);
    expect(contains({name: "Ahmed", age: 30}, "name")).toBe(true);
});

// Given an object with properties
// When passed to contains with a non-existent property name
// Then it should return false
test.todo("if contains on object with non-existent property returns false");
test("if contains on object with non-existent property returns false", () => {
    expect(contains({m: 10, s: 20, w: 5}, "x")).toBe(false);
    expect(contains({num1: 100, num2: 200, num3: 300}, "num5")).toBe(false);
    expect(contains({name: "Ahmed", age: 30}, "address")).toBe(false);
});

// Given invalid parameters like an array
// When passed to contains
// Then it should return false or throw an error
test.todo("if contains with invalid parameters returns false or throws an error");
test("if contains with invalid parameters returns false or throws an error", () => {
    expect(contains(['a','b','c'], "1")).toBe(false);
    expect(contains("string", "a")).toBe(false);
    expect(contains(12345, "a")).toBe(false);
});
