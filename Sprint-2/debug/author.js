// Predict and explain first...
/* 
I expect the code to give an error because the object is a plain object and not an array of objects and for...of loops are used for iterating over arrays, strings, arrays of objects, etc.
*/

// This program attempts to log out all the property values in the object.
// But it isn't working. Explain why first and then fix the problem
/*
Since objects do not have a default iterator the code won't work as the for...of loop is trying to access the object as if it were an array. Essentially it is not able to loop through all the values directly in the author object.
Also the console is attempting to log the value of the object directly, however this code will log "undefined" because `value` is not defined in the scope of the for...of loop.
To fix this we could use a for...in loop to iterate over the properties (keys) of the author object and access the values instead.
Then we log the values of the author object at the property named key instead.
*/

const author = {
  firstName: "Zadie",
  lastName: "Smith",
  occupation: "writer",
  age: 40,
  alive: true,
};

// for (const value of author) {
//   console.log(value);
// }
for (const key in author) {
  console.log(author[key]);
}
