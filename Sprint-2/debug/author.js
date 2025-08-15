// Predict and explain first...

// Firstly I think that I can get access to object values as I usually get to the array elements.
// But I got error. Now I understood and learnt that to get access to object properties we need special
// use method Object.keys, Object.values, Object.entries (to access both).

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
