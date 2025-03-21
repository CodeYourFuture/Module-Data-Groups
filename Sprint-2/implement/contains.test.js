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
test("Get empty object ,returns false",() =>
{
    const person = {};
    expect(contains(person)).toEqual(false)
});

// Given an object with properties
// When passed to contains with an existing property name
// Then it should return true
test("Get an object with property name that include returns true",() =>
    {
        const company = {name: "CYF",place: "London"};
        expect(contains(company,"name")).toEqual(true)
    });

// Given an object with properties
// When passed to contains with a non-existent property name
// Then it should return false

test("Get an object with property name that does not include returns true",() =>
    {
        const company = {name: "CYF",place: "London"};
        expect(contains(company,"org")).toEqual(false)
    });

// Given invalid parameters like an array
// When passed to contains
// Then it should return false or throw an error

test("Get other type except object throw an error",() =>
    {
        
        expect(() => contains([])).toThrow("The input is not an object");
        
    });