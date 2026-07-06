// Predict and explain first...

// This program attempts to log out all the property values in the object.
// But it isn't working. Explain why first and then fix the problem

/*const author = {
  firstName: "Zadie",
  lastName: "Smith",
  occupation: "writer",
  age: 40,
  alive: true,
};

for (const value of author) {
  console.log(value);
}*/

//------------------------------------------------------------------------------------------

// Prediction and explanation

/*This gives an error because:
author is a plain object
for...of only works with iterables
Objects are not iterable by default
So JavaScript throws:
TypeError: author is not iterable
 */

//fixed code

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
