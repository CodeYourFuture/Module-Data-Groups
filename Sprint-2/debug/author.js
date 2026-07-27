// Predict and explain first...

// This program attempts to log out all the property values in the object.
// But it isn't working. Explain why first and then fix the problem

/* const author = {
  firstName: "Zadie",
  lastName: "Smith",
  occupation: "writer",
  age: 40,
  alive: true,
};

for (const value of author) {
  console.log(value);
}
*/

// Prediction and Explanation
/* The line "for (const value of author) {console.log(value);}" will not work because for-of is used only for iterable things, e.g: arrays, strings, maps, sets.
But author is a plain object (created with {}), and plain objects are not iterable. So Javascript throws: TypeError: author is not iterable because objects don't have a natural order to loop through. */

// Corrected code
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
