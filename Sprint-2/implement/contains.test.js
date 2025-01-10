const contains = require("./contains.js");

/*
Implement a function called contains that checks an object contains a
particular property

E.g. contains({a: 1, b: 2}, 'a') // returns true
as the object contains a key of 'a'

E.g. contains({a: 1, b: 2}, 'c') // returns false
as the object doesn't contains a key of 'c'
*/
describe("function contains", () => {
    test("When passed an object and a property name, it should return true if the object contains the property ", () => {
        expect(contains({ name: "Mike", age: 25, city: "Cape Town"}, "age")).toEqual(true);
    });

    test("When passed an empty object, it should return false ", () => {
        expect(contains({}, "age")).toEqual(false);
    });

    test("When passed an object with a non-existent property name, it should return false ", () => {
        expect(contains({name: "Mike", age: 25, city: "Cape Town" }, "band")).toEqual(false);
    });

    test("When passed an invalid parameters like an array, it should return false ", () => {
        expect(contains([true, "Mike", 35, "City"], "Mike")).toEqual(false);
    });

    test("When passed an invalid parameter like an array and we check for indices , it should return true ", () => {
        expect(contains([true, "Mike", 35, "City"], "1")).toEqual(false);
    });
})


// Acceptance criteria:

// Given a contains function
// When passed an object and a property name
// Then it should return true if the object contains the property, false otherwise

// Given an empty object
// When passed to contains
// Then it should return false

// Given an object with properties
// When passed to contains with an existing property name
// Then it should return true

// Given an object with properties
// When passed to contains with a non-existent property name
// Then it should return false

// Given invalid parameters like an array
// When passed to contains
// Then it should return false or throw an error
