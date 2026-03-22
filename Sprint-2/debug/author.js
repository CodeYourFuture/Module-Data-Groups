// Predict and explain first...
//it will have an errors

// This program attempts to log out all the property values in the object.
// But it isn't working. Explain why first and then fix the problem
//The problem is that the variable author is an object which is not iterable in for.. of loops. You have to use either values, keys or entries.

const author = {
  firstName: "Zadie",
  lastName: "Smith",
  occupation: "writer",
  age: 40,
  alive: true,
};

for (const value of Object.values(author)) {
  console.log(value);
  //Prints the following output:
  //Zadie
  //Smith
  //writer
  //40
  //true
}
