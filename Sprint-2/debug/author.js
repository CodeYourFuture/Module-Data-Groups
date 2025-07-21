// Predict and explain first...

//My prediction:
//The code will throw a TypeError because author is a regular object, and the for...of loop 
// only works with iterables like arrays, strings, etc.
// Since objects are not iterable by default, trying to do for (const value of author) will fail.
// To loop through all values in the object, we need to convert it into
//  something iterable — like using Object.values(author), which returns an array of all values.

// This program attempts to log out all the property values in the object.
// But it isn't working. Explain why first and then fix the problem

const author = {
  firstName: "Zadie",
  lastName: "Smith",
  occupation: "writer",
  age: 40,
  alive: true,
};
// Broken code
// for (const value of author) {
//  console.log(value);
// }
// This will cause a TypeError: author is not iterable.

//Fixed code

for (const value of Object.values(author)) {
  console.log(value);
}

