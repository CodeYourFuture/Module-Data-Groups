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

for (const val in author) {
  console.log(author[val]);
}
// Changing value to val so it does not conflict with fact that it is the keys that are being logged to 
// display the 'value' they hold
//Used for .... in  as this will iterate over the keys ie the indexes rather than the values
