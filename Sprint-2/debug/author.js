// Predict and explain first...

// This program attempts to log out all the property values in the object.
// But it isn't working. Explain why first and then fix the problem

const author = {
  firstName: "Zadie",
  lastName: "Smith",
  occupation: "writer",
  age: 40,
  alive: true,
};

  for (const key in author) {
    console.log(author[key]);
  }

// The problem in this code is in (for...of) loop it tried to log the value of author which is an object not an array.
// To solve this issue we can use the for...in and log the author value by its key