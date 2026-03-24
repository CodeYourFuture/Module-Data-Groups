// Predict and explain first...

// This program attempts to log out all the property values in the object.
// It was not working because plain objects are not iterable with for...of.
// To loop through the values, we first convert them into an array using Object.values().

const author = {
  firstName: "Zadie",
  lastName: "Smith",
  occupation: "writer",
  age: 40,
  alive: true,
};

// Loop through all the values in the object
for (const value of Object.values(author)) {
  console.log(value);
}
