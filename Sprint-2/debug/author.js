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

for (const prop in author) {
  console.log(`${prop}:${author[prop]}`);
}

/*In this code the problem is that the method for...of is used for array 
not for object type instead we use for...in this will work through the object
 and list the key and for value We use author[property] */
