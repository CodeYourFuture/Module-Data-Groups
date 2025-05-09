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

for (const value in author) {
  console.log(value);
}

// The issue in code because we can't use for of loop to the objects, (we can use it to arrays ) so we can convert our object into array using Object.values(author) and use for of loop or easiest way just use for in loop which intended for objects.
