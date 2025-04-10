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
    it("check if object has property", () => {
      expect(contains({name: 'Hanna'}, 'name')).toEqual(true);
      expect(contains({name: 'Hanna'}, 'surname')).toEqual(false);
    });
    // Given an empty object
    // When passed to contains
    // Then it should return false
    it("if object is empty it should return false", () => {
      expect(contains({}, 'name')).toEqual(false);
    });
    // Given an object with properties
    // When passed to contains with an existing property name
    // Then it should return true
    it("if object has multiple properties and passed existing property name it should return true", () => {
      expect(contains({property1: 'exist1', property2: 'exist2'}, 'property1')).toEqual(true);
    });
    // Given an object with properties
    // When passed to contains with a non-existent property name
    // Then it should return false
    it("if object has multiple properties and passed non-existing property name it should return false", () => {
      expect(contains({property1: 'exist1', property2: 'exist2'}, 'property3')).toEqual(false);
    });
    // Given invalid parameters like an array
    // When passed to contains
    // Then it should return false or throw an error
    it("in case of invalid parametr function contains should throw an error", () => {
      expect(contains( [1,2,3], 'property')).toEqual(false);
      expect(contains( "test", 'property')).toEqual(false);
    });
});


