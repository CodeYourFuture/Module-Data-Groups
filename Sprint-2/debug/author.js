// Predict and explain first...
/* 
author is an object. The original code tries to use a for...of loop directly on the object, but normal objects 
cannot be directly iterated using for...of. Since we only want the property values, we can use Object.values(author) 
to get all the values from the object.
 */
// This program attempts to log out all the property values in the object.
// But it isn't working. Explain why first and then fix the problem



const author = {
  firstName: "Zadie",
  lastName: "Smith",
  occupation: "writer",
  age: 40,
  alive: true,
};
console.log(Object.values(author));

