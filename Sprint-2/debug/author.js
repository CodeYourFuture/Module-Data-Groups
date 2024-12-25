// Predict and explain first...

// This program attempts to log out all the property values in the object.
// But it isn't working. Explain why first and then fix the problem

// My Answer:
// The program tries to loop over the author object using a for...of loop,
// but that doesn’t work because regular objects like author aren’t something you can loop over with for...of.

// Objects in JavaScript don’t naturally know how to "be looped over" the way arrays or strings do.
//  That’s why it crashes and throws a TypeError.

// Fixing the issue:
// If you want to get all the values inside the object, you need to first turn those values into something that can be looped over,
// like an array. You can use Object.values(author) to grab all the values as an array, and then you can use for...of on it.
// In short, Object.values() makes it work because it turns the object values into an array, and arrays are totally cool with for...of.



const author = {
  firstName: "Zadie",
  lastName: "Smith",
  occupation: "writer",
  age: 40,
  alive: true,
};

for (const value of Object.values(author)) {
  console.log(value);

// More interestingly, is that you can extract keys as well.
// You can have a look on the following syntax.

// for (const key of Object.keys(author)) {
//   console.log(key);}

}
