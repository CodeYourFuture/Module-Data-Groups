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

for (const value in author){
  console.log(value);
}

because we use for...of loop in array instead of objects. To use it in objects, we can change it to for...in loop
In order to print out all the variable and the value , we should use console.log(${key}:${author[key]}).



const author = {
  firstName: "Zadie",
  lastName: "Smith",
  occupation: "writer",
  age: 40,
  alive: true,
};

for (const key in author) {
  console.log(`${key}: ${author[key]}`);
}