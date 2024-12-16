// Predict and explain first...

// This program attempts to log out all the property values in the object.
// But it isn't working. Explain why first and then fix the problem

 // the issue is in the code we were trying to use the for..of loop on object.
 // the solution is we can use the "object.values" to get only values.
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