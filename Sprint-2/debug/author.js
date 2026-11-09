// Predict and explain first...

// I predict the code will generate error, because it has used for of loop which is for looping array,
//  instead of for in loop that is for looping objects

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
  console.log(value);
}
