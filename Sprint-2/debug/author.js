// Predict and explain first...
// My prediction is that there will be a TypeError  as for ..of loop that  is meant for array like object is being used on an object literals to access it's properties 

// This program attempts to log out all the property values in the object.
// But it isn't working. Explain why first and then fix the problem

const author = {
  firstName: "Zadie",
  lastName: "Smith",
  occupation: "writer",
  age: 40,
  alive: true,
};

for (const value of author) {
  console.log(value);
}
