// Predict and explain first...

//This code tries to use a for...of loop on an object, but objects are not iterable by default.
//for...of works on iterables like arrays, strings, maps, sets — not plain objects.
//Running this will throw:
//TypeError: author is not iterable

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
