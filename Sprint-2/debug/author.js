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
function readvalues(){
for (const key in author) {
  console.log(key + ':' +author[key]);
}
}
readvalues();
/* My first  prediction was that it wont work and we will need a for of loop to iterate over every key in object.
 That prediction failed because a for of loop doesn't work here. we need a for in loop or we can also use a built in js method 
 called object.keys(), for my  better understanding I will use a for in loop here.*/
