// Predict and explain first...

// This program attempts to log out all the property values in the object.
// But it isn't working. Explain why first and then fix the problem

//To get all the values from a object we don't need go through using for loop 
//We can use the function Object.values and in parenthesis the name of the Object 

const author = {
  firstName: "Zadie",
  lastName: "Smith",
  occupation: "writer",
  age: 40,
  alive: true,
};


console.log(Object.values(author)); 


