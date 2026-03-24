// Predict and explain first...
// Running the file will result in a TypeError: author is not iterable. This is because the for...of loop is designed to work with iterable objects (like arrays, strings, etc.), but 'author' is a plain JavaScript object, which is not iterable by default. To iterate over the properties of an object, we can use a for...in loop or Object.values() method instead.

// This program attempts to log out all the property values in the object.
// But it isn't working. Explain why first and then fix the problem

const author = {
  firstName: "Zadie",
  lastName: "Smith",
  occupation: "writer",
  age: 40,
  alive: true,
};

for (const value of Object.values(author)) {
  console.log(value);
}
