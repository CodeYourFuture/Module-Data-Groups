// Predict and explain first...
// we cannot use the the for ...of loop in object 
// we should use the for ...in loop

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
  const value = author[key]
  console.log(value);
}
