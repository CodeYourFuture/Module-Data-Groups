// Predict and explain first...
/*This is (author) an object that contains different data consisting of numbers, strings, 
arrays, nested objects, or functions representing structured data with different properties 
(like houseNumber, name of street). It is a set of date represented in key-value format.*/
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

