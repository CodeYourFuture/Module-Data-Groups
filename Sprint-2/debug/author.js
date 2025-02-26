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

for (const value in author) {
  console.log(author[value]); //print the values of the keys in the array author
}
// we only use for of loop for iterable objects like arrays and strings so i will fix it with for in loop
//for (const value of author) {
//  console.log(value);
//}