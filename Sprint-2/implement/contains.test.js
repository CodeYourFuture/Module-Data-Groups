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
test("given a contains function, it should return true if the object contains the property, false otherwise", ()=>{
 expect(contains({name:"Farah", age:30}, 'age')).toBe(true);
 expect(contains({city:"London",job:"web developer"}, 'age')).toBe(false);
});

// Given an empty object
// When passed to contains
// Then it should return false
test("given an empty object, it should return false", ()=>{
 expect(contains({}, '')).toBe(false);
})

// Given an object with properties
// When passed to contains with an existing property name
// Then it should return true

test("given an object with properties, it should return true with an existing property name",()=>{
    expect(contains({city:"Manchester", country:"UK"}, 'city')).toBe(true);
});
// Given an object with properties
// When passed to contains with a non-existent property name
// Then it should return false

test("given an object with properties, it should return false with a non-existent property name",()=>{
    expect(contains({firstName:"Farah", lastName:"BLK"}, 'age')).toBe(false);
});
// Given invalid parameters like an array
// When passed to contains
// Then it should return false or throw an error

test("given invalid parameters like an array, it should return false or throw an error",()=>{
    expect(contains([1,2,3], '2')).toBe(false);
});
