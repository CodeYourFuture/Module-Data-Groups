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

// for (const value of author) {
//    console.log(value);
// }
// The code aims to log all property values in the author object, 
// like:Zadie:
// Smith
// writer
// 40
// true
// author is a plain object, but for...of only works on iterable things like arrays, strings, Maps.


for (const value of Object.values(author)) {
   console.log(value);
}