// Predict and explain first...
//Objects are not iterable with a for.. of loop, therefore, this code will throw an error
// This program attempts to log out all the property values in the object.
// But it isn't working. Explain why first and then fix the problem

const author = {
  firstName: "Zadie",
  lastName: "Smith",
  occupation: "writer",
  age: 40,
  alive: true,
};
// to iterate through an object we use the Object.entries, we cannot use the for loop only like we do in arrays
for (const [key, value] of Object.entries(author)) {
  console.log(`${value}`);
}
//console.log(Object.values(author));
