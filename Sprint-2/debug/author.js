// Predict and explain first...
//i think its because value is not used as a parameter of an object, and author is an object not an ordered list Array.
// This program attempts to log out all the property values in the object.
// But it isn't working. Explain why first and then fix the problem
// i found that object literals are not iterative because they have no orders
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
