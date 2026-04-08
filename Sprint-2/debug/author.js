// Predict and explain first...
// It will throw a TypeError.Because a for of loop only can go throuhgh things like strings and arrays but not object.
// This program attempts to log out all the property values in the object.
// But it isn't working. Explain why first and then fix the problem
// To print the value of the object , we use object.values() because it turn the object into list of value that er can loop through and log.

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
