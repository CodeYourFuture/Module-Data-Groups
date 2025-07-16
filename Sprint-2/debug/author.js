// Predict and explain first...

//for...of is used with iterables like arrays and strings
//objects are not iterables by default as it is seen in the code like author which is an object


// This program attempts to log out all the property values in the object.
// But it isn't working. Explain why first and then fix the problem

const author = {
  firstName: "Zadie",
  lastName: "Smith",
  occupation: "writer",
  age: 40,
  alive: true,
};

for (const value of object.values(author) {
  console.log(value);
}
