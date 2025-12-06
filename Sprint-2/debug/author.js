// Predict and explain first...

// I thought the value in the log needed to get attached with the author like value.author 
// But the error was author is not iterable as it is an object, so we need to modify the for ... of loop as
// for(const value of Object.values(author))

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

// Author.js corrected.