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
object={}
console.log(object,'')
test.todo("contains on empty object returns false");

// Given an object with properties
// When passed to contains with an existing property name
// Then it should return true
object={name:'jin', age:13}
console.log (contains(object, 'age'))
test.todo("contains age property in object return true")


// Given an object with properties
// When passed to contains with a non-existent property name
// Then it should return false
object={name:'jin', age:13}
console.log (contains(object, 'nice'))
test.todo("contains no nice property  in object return false")



// Given invalid parameters like an array
// When passed to contains
// Then it should return false or throw an error
object={name:'jin', age:13}
console.log (contains(object, '[1,2,5]'))
test.todo("contains no array property  in object return false")
