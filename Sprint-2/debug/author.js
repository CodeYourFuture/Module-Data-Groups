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

// for (const value of author) {// the problem is with for...of loop, it only works with arrays and strings that are iterables, the objects do not have an inherent order or iterable protocol (like arrays do). Instead use for... in loop to go through the keys
for (const key in author){
  console.log(author[key]);// the for...in goes through each key in the author object (first name etc), then we access the value linked to each key using author[key], that will print the value 
}
