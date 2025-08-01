// Predict and explain first...
// it doesnt work as objects are not iteraable and there for we cant use for loops.
// But by using object.values allows us to get the value within an object and store it in an array and then we can use for of loop.
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
