// Predict and explain first...

// This program attempts to log out all the property values in the object.
// But it isn't working. Explain why first and then fix the problem
// The problem is that the for...of loop is being used on an object, 
// which is not iterable. Instead, we should use Object.values() to get an array of the object's values and then iterate over that array.

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
