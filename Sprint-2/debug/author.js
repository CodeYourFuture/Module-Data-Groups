// Predict and explain first...

// This program attempts to log out all the property values in the object.
// But it isn't working. Explain why first and then fix the problem

//const author = {
  //firstName: "Zadie",
  //lastName: "Smith",
  //occupation: "writer",
  //age: 40,
  //alive: true,
//};

//for (const value of author) {
  //console.log(value);
//}

// If you run this snippet, JavaScript will throw a TypeError: author is not iterable.
// The for...of loop is designed specifically for iterable objects (like Arrays, Strings, Sets, or Maps)
// Plain JavaScript objects ({}) are not iterable by default with for...of.
// They are collection of key-value pairs without a guaranteed built-in iteration order sequence.

// to fix this, i wii specifically want to stick with for...of to loop directly through the property values:
// i will use Object.values() with for...of

const author = {
  firstName: "Zadie",
  lastName: "Smith",
  occupation: "writer",
  age: 40,
  alive: true,
};

// Object.values(author) returns an array: ["Zadie", "Smith", "writer", 40, true]
for (const value of Object.values(author)) {
  console.log(value);
}