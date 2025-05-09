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

//The reason it is not working is because the for loop is unable to go in to the object and retrieve those values.
//To fix the problem we can remove the for loop and simplyfy it by only logging our object

  console.log(author);

