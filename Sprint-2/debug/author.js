// Predict and explain first...

//I predict that the for of loop will output an error instead of the value. Its not indicating what must be logged from the object

// This program attempts to log out all the property values in the object.
// But it isn't working. Explain why first and then fix the problem

//It is treating the object like an array, the object has key value pairs
const author = {
  firstName: "Zadie",
  lastName: "Smith",
  occupation: "writer",
  age: 40,
  alive: true,
};

//to access the value we can use the for in loop which is suitable for objects

for (const value in author) {
  console.log(`${author[value]}`);
}

