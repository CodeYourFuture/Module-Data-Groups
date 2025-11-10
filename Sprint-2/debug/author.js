// Predict and explain first...

// I predict that the console will log "undefined" because
// it is looping through elements in a collection (e.g. arrays and sets)
// whereas author is an object.

// This program attempts to log out all the property values in the object.
// But it isn't working. Explain why first and then fix the problem

// The loop is trying to loop through an array

const author = {
  firstName: "Zadie",
  lastName: "Smith",
  occupation: "writer",
  age: 40,
  alive: true,
};

for (value in author) {
  console.log(value);
}
