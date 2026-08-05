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

for (const value of author) {
  console.log(value);
}

// this code will throw an error because on line for 14 it is trying to loop a plain object. 

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

//we fix this by using Object.values, i.e. turning plain object in an array. 

const author = {
  firstName: "Zadie",
  lastName: "Smith",
  occupation: "writer",
  age: 40,
  alive: true,
};

const keys = Object.keys(author);

for (let i = 0; i < keys.length; i++) {
  console.log(author[keys[i]]);
}

//changed it to using "for" loop. 
