// Predict and explain first...

// This program attempts to log out all the property values in the object.
// But it isn't working. Explain why first and then fix the problem
// Because objects are not iterable, so they need to be converted to arrays so as we can loop through them so, with Object.entries() method as this method converts the objects into key and value pairs within an array.

const author = {
  firstName: "Zadie",
  lastName: "Smith",
  occupation: "writer",
  age: 40,
  alive: true,
};

let authorEntries = Object.entries(author);
for (const value of authorEntries) {
  console.log(value);
}
//
