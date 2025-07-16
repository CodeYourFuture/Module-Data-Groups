// Predict and explain first...
// I think this code will not work as expected because the `for...of` 
// loop is trying to iterate over an object.
// Objects cannot be iterated directly with `for...of`.

// This program attempts to log out all the property values in the object.
// But it isn't working. Explain why first and then fix the problem

//JavaScript objects like author aren’t directly iterable with a for...of loop.
//for...of is designed to work with iterable objects like arrays, strings, maps, 
// etc. Since author is a plain object, trying to iterate over it like that throws a TypeError.
// To fix this, we can use `Object.values()` to get an array of the object's values
//  and then iterate over that array.

const author = {
  firstName: "Zadie",
  lastName: "Smith",
  occupation: "writer",
  age: 40,
  alive: true,
};

for (const value of author) {
  console.log(value);
}
