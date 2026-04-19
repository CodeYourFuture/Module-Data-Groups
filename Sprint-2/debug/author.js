// Predict and explain first...
I predict that the program will not give the property values of the object because the for loop is not correctly calling the values of the auther object .
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
//   console.log(value);
// }

let text = " ";
for (let x in author) {
  text+= author[x] + "\n ";
};
console.log(text);

// or: 
const values = Object.values(author) .join ("\n");
console.log(values);

