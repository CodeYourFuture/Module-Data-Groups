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

/**
 * Explanation:
 *
Why the original didn't work: 
Objects in JavaScript are not iterable by default, so for...of cannot directly iterate over them.
Object.values(): This method returns an array of enumerable property values of an object, which is iterable giving the object's own values.
*/
