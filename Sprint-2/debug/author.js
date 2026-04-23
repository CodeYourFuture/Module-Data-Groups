// Predict and explain first...

// This program attempts to log out all the property values in the object.
// But it isn't working. Explain why first and then fix the problem

// An object is not iterable by default it is a collection of keys and value pairs. This means their is no path for the for loop to follow.
// Due to this when we run this code we are going to get a type error. To fix this and log all the property values in the object;
// we must convert the object data into an array.

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
