// Predict and explain first...

// Answer | In an object for ... in should be used to loop trough the keys to access the corespondin values, and not the for...of loop that is intended for iterable objects.


// This program attempts to log out all the property values in the object.
// But it isn't working. Explain why first and then fix the problem

const author = {
  firstName: "Zadie",
  lastName: "Smith",
  occupation: "writer",
  age: 40,
  alive: true,
};

for (let key in author) {
  console.log(author[key]);
}
