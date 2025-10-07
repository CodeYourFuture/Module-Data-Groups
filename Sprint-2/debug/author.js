// Predict and explain first...
/* In JavaScript, objects are not iterable by default, which means you cannot use a for...of loop directly on an object. 
The for...of loop is designed to work with iterable objects like arrays, strings, maps, and sets. Since the 'author' object 
is not iterable, attempting to use for...of on it will result in a TypeError. To iterate over the properties of an object, 
we can use Object.keys(), Object.values(), or Object.entries().*/

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
