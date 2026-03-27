// Predict and explain first...

//The for...of loop only works on iterable objects, like arrays, strings, Maps, Sets.


// This program attempts to log out all the property values in the object.
// But it isn't working. Explain why first and then fix the problem

const author = {
  firstName: "Zadie",
  lastName: "Smith",
  occupation: "writer",
  age: 40,
  alive: true,
};

for (const value of Object.values (author)) {
  console.log(value);
}
