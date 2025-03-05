// Predict and explain first...
// it will give error as it is not iterable object(author)
// This program attempts to log out all the property values in the object.
// But it isn't working. Explain why first and then fix the problem

const author = {
  firstName: "Zadie",
  lastName: "Smith",
  occupation: "writer",
  age: 40,
  alive: true,
};

for (const value in author) {// use for ...in to iterate keys and access values
  console.log(author[value]);
}
