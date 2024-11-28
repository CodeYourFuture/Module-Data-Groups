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

describe("contains", () => {
    // Given a contains function
    // When passed an object and a property name
    // Then it should return true if the object contains the property, false otherwise

    test("given a contains function, return true if the object contains the property, false otherwise", () => {
        expect(contains({a: "Red", b: "Green",}, "a")).toBe(true);
        expect(contains({ a: "Red", b: "Green", c: "Brown", }, "f")).toBe(false);
    });

    // Given an empty object
    // When passed to contains
    // Then it should return false
    test("contains on empty object returns false", () => {
        expect(contains({})).toBe(false);    
    });

    // Given an object with properties
    // When passed to contains with an existing property name
    // Then it should return true
    test("given an object with properties and contains with an existing property name, return true", () => {
        expect(contains({ name: "Tom", b: "Green", }, "name")).toBe(true);
    });

    // Given an object with properties
    // When passed to contains with a non-existent property name
    // Then it should return false

    test("given an object with properties and contains with a non-existent property name, return true", () => {
        expect(contains({ name: "Tom", b: "Green", }, "colour")).toBe(false);
    });

    // Given invalid parameters like an array
    // When passed to contains
    // Then it should return false or throw an error

    test("given invalid parameters like an array, return false or throw an error", () => {
        expect(contains([])).toBe(false);
        expect(contains("Name", "a")).toBe(false);        
    });
});