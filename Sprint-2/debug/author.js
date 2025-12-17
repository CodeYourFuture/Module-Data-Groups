// Predict and explain first...
//the method for of is an array method and it would be looking for an indexed list of items rather than a key value pair so an error will be thrown since we are using an object.

// This program attempts to log out all the property values in the object.
// But it isn't working. Explain why first and then fix the problem
//i can fix this by changing for ... of to for ... in.

const author = {
  firstName: "Zadie",
  lastName: "Smith",
  occupation: "writer",
  age: 40,
  alive: true,
};

for (const value in author) {
  console.log(author[value]);
}
