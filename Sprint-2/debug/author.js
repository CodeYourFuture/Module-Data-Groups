// Predict and explain first...
/* Hmmn, I just looked up how for...of loops work, and it says that they are used on iterables. Objects aren't iterable. I think that lines 15&16 will cause an error.
... It did! TypeError: author is not iterable*/

// This program attempts to log out all the property values in the object.
// But it isn't working. Explain why first and then fix the problem

const author = {
  firstName: "Zadie",
  lastName: "Smith",
  occupation: "writer",
  age: 40,
  alive: true,
};

for (const key in author) {
  console.log(author[key]);
  /* author.key doesn't work because you can't use variables with dot notation - it'd literally be looking for the key called "key" in the author object*/
}
