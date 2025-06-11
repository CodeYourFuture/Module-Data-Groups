// Predict and explain first...

// This program attempts to log out all the property values in the object.
// But it isn't working. Explain why first and then fix the problem
// the program is not running because author is not an array hence its not iterable
// the best way is to call them individually using the dot notation

const author = {
  firstName: "Zadie",
  lastName: "Smith",
  occupation: "writer",
  age: 40,
  alive: true,
};

console.log(author.firstName);
console.log(author.lastName);
console.log(author.occupation);
console.log(author.age);
console.log(author.alive);
