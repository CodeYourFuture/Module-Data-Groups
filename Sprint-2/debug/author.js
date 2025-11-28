// Predict and explain first...
//The code will give an error because for...of does not work on objects.
// This program attempts to log out all the property values in the object.
// But it isn't working. Explain why first and then fix the problem
/*This is because for...of only works with arrays or strings.
 An object like author is not an array, so the code will give an error. Nothing will be printed.*/
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
