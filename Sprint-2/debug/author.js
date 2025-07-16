// Predict and explain first...

// - it gives us an error message because we use for loop for non iterable object.


// This program attempts to log out all the property values in the object.
// But it isn't working. Explain why first and then fix the problem

// - The issue is that the code is trying to use a `for...of` loop on an object, which is not iterable.
// - To fix this, we can use `Object.values()` to get an array of the object's values and then iterate over that array.


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


