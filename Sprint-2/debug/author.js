// Predict and explain first...
// it will throw an error because we cannot iterate directly in an object, we need first to make sure that the object become an array to iterate.
// This program attempts to log out all the property values in the object.
// But it isn't working. Explain why first and then fix the problem

const author = {
  firstName: "Zadie",
  lastName: "Smith",
  occupation: "writer",
  age: 40,
  alive: true,
};

const newObject = Object.values(author)
for (const value of newObject) {
  console.log(value);
}
