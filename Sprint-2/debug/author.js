// Predict and explain first...

// This program attempts to log out all the property values in the object.
// But it isn't working. Explain why first and then fix the problem

    // i know it will not work because we cant access these values this way.
    // what i learned new is the 3 properties

const author = {
  firstName: "Zadie",
  lastName: "Smith",
  occupation: "writer",
  age: 40,
  alive: true,
};

//for (const value of author) {
  //console.log(value);}

for (const key in author) {
  console.log(author[key]);
}
for (const value of Object.values(author)) {
  console.log(value);
}
for (const key of Object.keys(author)) {
  console.log(author[key]);
}
for (const [key, value] of Object.entries(author)) {
  console.log(value); // or console.log(`${key}: ${value}`)
}