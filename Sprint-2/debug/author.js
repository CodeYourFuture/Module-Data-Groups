// Predict and explain first...
// author is an object. It cannot be accessed through its values, maybe through its key, value pairs instead of "value" -

//update on explanation: objects could be accessed through 3 methods, depending on whether we want the property name or property value, or the pair. :
//1. Object.keys() collects into an array the keys (property names) ignoring the values
//2. Object.values() collects into an array the values ignoring the property names
//3. Object.entries() collects an array of arrays of key-value pairs

// This program attempts to log out all the property values in the object.
// But it isn't working. Explain why first and then fix the problem

const author = {
  firstName: "Zadie",
  lastName: "Smith",
  occupation: "writer",
  age: 40,
  alive: true,
};

console.log(Object.values(author));
// for (const value of author) {
//   console.log(value);
// }
