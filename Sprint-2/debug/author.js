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

for (const value of Object.values(author)) {
  console.log(value);
}


/* BUG: Objects are not iterable, so `for...of author` throws TypeError.
 FIX: Used Object.values(author) to loop over the property values.
for (const value of Object.values(author)) {
  console.log(value);
}
*/
