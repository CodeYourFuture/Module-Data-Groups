// Predict and explain first...
/*This is (author) an object that contains different data consisting of numbers, strings, 
arrays, nested objects, or functions representing structured data with different properties 
(like age, firstName). It is a set of date represented in key-value format.*/
// This program attempts to log out all the property values in the object.
// But it isn't working. Explain why first and then fix the problem
/*We must called all values of object (author) and print them to the console using "for...of. */
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

