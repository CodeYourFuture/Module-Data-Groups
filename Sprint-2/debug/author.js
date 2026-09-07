// Predict and explain first...

// This program attempts to log out all the property values in the object.
// But it isn't working. Explain why first and then fix the problem

// const author = {
//   firstName: "Zadie",
//   lastName: "Smith",
//   occupation: "writer",
//   age: 40,
//   alive: true,
// };
//
// for (const value of author) {
//   console.log(value);
// }

// The script will result in an error because we are trying to loop through the elements
// of the object, more precisely, through the values of the key-value pairs.
// The solution written like this would work if author would have been an array.
// For an object, we need to do an extra specification of the data we want to,b,
// loop through.

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
