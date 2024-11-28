// Predict and explain first...

// This program attempts to log out all the property values in the object.
// But it isn't working. Explain why first and then fix the problem

//Answer :
//The for...of loop is designed to iterate over iterables, such as arrays, strings, and maps.
// An object like author is not iterable by default, so using for...of directly on an object will result in an error.
//So,we should use method like Object.values().

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
