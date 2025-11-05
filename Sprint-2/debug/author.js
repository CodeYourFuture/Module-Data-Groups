// Predict and explain first...

// This program attempts to log out all the property values in the object.
// But it isn't working. Explain why first and then fix the problem

//answer : the result is TypeError: author is not iterable  Because objects are not iterable with for...of — that loop only works with arrays, strings, and other iterable types.

const author = {
  firstName: "Zadie",
  lastName: "Smith",
  occupation: "writer",
  age: 40,
  alive: true,
};

// for (const value of author) {    wrong code
//   console.log(value);
// }

for (const value of Object.values(author)) {
  console.log(value);
}
