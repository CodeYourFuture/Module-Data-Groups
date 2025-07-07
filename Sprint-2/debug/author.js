// Predict and explain first...
// prediction before running code: because accessing values of objects should've been done via dot notation or the square brackets method. 
//observations after running code: the "for.. of" method only works on iterable objects excluding "plain objects". "For...in" method could be used instead.

// This program attempts to log out all the property values in the object.
// But it isn't working. Explain why first and then fix the problem

const author = {
  firstName: "Zadie",
  lastName: "Smith",
  occupation: "writer",
  age: 40,
  alive: true,
};

for (const value in author) {
  console.log(author[value]);
}

