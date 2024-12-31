// Predict and explain first...

// This program attempts to log out all the property values in the object.
// But it isn't working. Explain why first and then fix the problem

/*
const author = {
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

// ____________________________________SOLUTION_______________________________________________
/*
PREDICTION:
This program is attempting to iterate the properties of 
the author object and log their values. 
However, the code will throw a TypeError 
because objects in JavaScript are not iterable by default,   */

/*
To iterate over object properties, 
we have to use methods like Object.keys, Object.values, or Object.entries to extract an iterable format.
*/

// In this case, I decided to use the Object.values() method, which returns an array of the object's values.
// Here is the debugged code: 

const author = {
  firstName: "Zadie",
  lastName: "Smith",
  occupation: "writer",
  age: 40,
  alive: true,
};

// at this point, I will use object.values to iterate over the property values
for (const value of Object.values(author)) {
  console.log(value);
}

// When I run the code, I get as output :   
// Zadie
// Smith
// writer
// 40
// true
