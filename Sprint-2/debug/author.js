// Predict and explain first...

// This program attempts to log out all the property values in the object.
// But it isn't working. Explain why first and then fix the problem

// I think the issue with the original code is it was trying to loop over the object directly,
//  which is not iterable. Instead, we should loop over the array that contains the object.

const author = 
  {
    firstName: "Zadie",
    lastName: "Smith",
    occupation: "writer",
    age: 40,
    alive: true,
  }

for (let [key, value] of Object.entries(author)) {
    console.log(key, value);
}
