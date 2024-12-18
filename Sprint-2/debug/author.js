// Predict and explain first...
// Answer: in the code below for...of loop trying loop through object that is causing error.
// for...of loop is used to iterate over iterables (such as arrays, strings, maps) and not over objects directly.
// instead use for...in loop or object.value

// This program attempts to log out all the property values in the object.
// But it isn't working. Explain why first and then fix the problem

const author = {
  firstName: "Zadie",
  lastName: "Smith",
  occupation: "writer",
  age: 40,
  alive: true,
};

// Object.values() to iterate over values directly:
for (const value of Object.values(author)) { 
  console.log(value);
}

//for...in loop to iterate over keys of an object:
for(key in author) {
  console.log(author[key])
}
