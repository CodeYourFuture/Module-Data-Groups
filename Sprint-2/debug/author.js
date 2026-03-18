// Predict and explain first...

// This program attempts to log out all the property values in the object.
// But it isn't working. Explain why first and then fix the problem

/*My prediction is that in the below code we are trying to run a for..of loop
on an object like we do for an array, i am not sure how can we make this work for
object, but this one seems like really not going to work because value is not a 
value but a key and value */

const author = {
  firstName: "Zadie",
  lastName: "Smith",
  occupation: "writer",
  age: 40,
  alive: true,
};

console.log(Object.values(author));
