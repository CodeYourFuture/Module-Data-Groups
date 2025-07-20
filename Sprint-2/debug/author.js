// This program attempts to log out all the property values in the object.
// But it isn't working. Explain why first and then fix the problem

const author = {
  firstName: "Zadie",
  lastName: "Smith",
  occupation: "writer",
  age: 40,
  alive: true,
};

/* =======> Predict and explain first...
This program will not work because 'author' is an object, not an array, so it is not iterable.
Running the code will throw an error. 

for (const value of author) {
  console.log(value);
}
  
=======> To fix:
One way to log out all the property values in the object is to access the keys 
with a 'for...in' loop. Then, use bracket notation to log each value.
*/


for (const key in author) { // Iterate over the property names [keys] of the author object.
  console.log(author[key]); // Use bracket notation to access and log each property value.
}
