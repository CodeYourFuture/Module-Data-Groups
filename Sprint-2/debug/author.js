// Predict and explain first...
/*
The program is attempting to iterate through the author object using a for...of loop. However, this results in an error because for...of is designed to iterate over iterable objects like arrays, string...
but auther is plain object, so the loop fails.
We have to use for...in for this object or  Object.values() to get an array of the values and then use for...of
*/
// This program attempts to log out all the property values in the object.
// But it isn't working. Explain why first and then fix the problem

const author = {
  firstName: "Zadie",
  lastName: "Smith",
  occupation: "writer",
  age: 40,
  alive: true,
};

// for (const value of author) {
//   console.log(value);
// }
//Use for...in
for (const key in author) {
  console.log(author[key]);
}
//Use Object.values()
for (const value of Object.values(author)) {
  console.log(value);
}
