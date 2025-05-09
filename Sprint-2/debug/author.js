// Predict and explain first...

// This program attempts to log out all the property values in the object.
// But it isn't working. Explain why first and then fix the problem

const author = {
  firstName: "Zadie",
  lastName: "Smith",
  occupation: "writer",
  age: 40,
  alive: true,
};

for(let value in author) {
  let values = author[value];
  console.log(values);
}
// using for...of loop (as it used for iterable objects like arrays, strings...) and objects are not iterable