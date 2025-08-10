// Predict and explain first...

// This program attempts to log out all the property values in the object.
// But it isn't working. Explain why first and then fix the problem

//Prediction : I think this will throw an error because author is an object and not an array.
// Objects are not iterable using for...of loops.
//The for...of loop only works with iterable objects like arrays, strings, or Maps/Sets. But plain objects ({}) are not iterable this way.
//To fix the code and list out all property we can use for...in or Object.values()

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

//Refactored Code

// Using for...in
for (const key in author) {
  console.log(author[key]);
}

// Using Object.values()
for (const value of Object.values(author)) {
  console.log(value);
}
