// Predict and explain first...

/* Prediction - TypeError: author is not iterable.

Explaination - The "for... of" loop is designed fir iterable objects like arrays, strings, maps or sets,
which have built in protocols. plain javascript objects like "author" are not iterable by default, 
which would cause the error when the "for... of" loop is used. */

// This program attempts to log out all the property values in the object.
// But it isn't working. Explain why first and then fix the problem

const author = {
  firstName: "Zadie",
  lastName: "Smith",
  occupation: "writer",
  age: 40,
  alive: true,
};

for (const value of Object.Values(author)) {
  console.log(value);
}
