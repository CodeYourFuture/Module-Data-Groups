// Predict and explain first...
//1st prediction: var value will log out both-key and value and we need value only
//2nd prediction(as the 1st was wrong): MDN says that for...of doen't work with objects but for...in does

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
