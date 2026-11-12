// Predict and explain first...

// I predict the code will generate error, because it has used for of loop which is for looping array,
//  instead of for in loop that is for looping objects

// This program attempts to log out all the property values in the object.
// But it isn't working. Explain why first and then fix the problem

// when we run it, it logs out the property key instead of its value because for...in iterates over the property keys (names), not the property values.
// we need to use square brackets [] to access the value associated with that property name

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
