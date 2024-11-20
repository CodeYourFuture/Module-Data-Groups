// Predict and explain first...

// This program attempts to log out all the property values in the object.
// But it isn't working. Explain why first and then fix the problem

// it doesn't work because in for loop it use's author like a array, we have to change it to get the key and value
const author = {
  firstName: "Zadie",
  lastName: "Smith",
  occupation: "writer",
  age: 40,
  alive: true,
};

for (const [key, value] of Object.entries(author)) {
  console.log(`${key} : ${value}`);
}
