// Predict and explain first...

// This program attempts to log out all the property values in the object.
// But it isn't working. Explain why first and then fix the problem

//author contains properties (key-value pairs), but a simple for...of loop treats it as if it's an array of values, which it isn't.



// The for...in loop treats `author` as an object and iterates over its keys.
// We then use those keys to log out their corresponding values.

const author = {
  firstName: "Zadie",
  lastName: "Smith",
  occupation: "writer",
  age: 40,
  alive: true,
};


// Iterate over the object's keys and log their values
for (const value in author) {
  // Logs the value associated with each key
  console.log(author[value]);
}




// ================= access to its keys ==============

for (const key in author){
console.log(key);
// console.log(key, author[key]); 
}