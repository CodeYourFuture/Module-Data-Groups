// Predict and explain first...
    //I think the problem in this problem is the for loop syntax,,,(for in) is used for object iteration and accessing the values we can use author[key]
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
  
  console.log(author[value]);
}
