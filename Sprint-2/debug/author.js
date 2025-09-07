// Predict and explain first...
// The code attempts to loop over author using for...of.
// But for...of works on iterable objects like arrays, strings, Maps, Sets.
// Plain objects ({}) are NOT iterable, so for (const value of author) will throw a TypeError:
// author is not iterable.

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
