// Predict and explain first...
// Prediction: Going to shows an error in the for loop.
// Explanation: we should have used the for .. in method (The for...in statement iterates over all enumerable string properties of an object (ignoring properties keyed by symbols), including inherited enumerable properties.)

// This program attempts to log out all the property values in the object.
// But it isn't working. Explain why first and then fix the problem

const author = {
  firstName: "Zadie",
  lastName: "Smith",
  occupation: "writer",
  age: 40,
  alive: true,
};

for (const value in author){
  console.log(`${value}: ${author[value]}`);
}
