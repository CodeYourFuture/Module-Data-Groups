// in my first Prediction -  the author is not iterable in for loop

// This program attempts to log out all the property values in the object.
// But it isn't working. Explain why first and then fix the problem


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
// for...in loop goes through all keys in the author object and author[key] accesses the value for each key