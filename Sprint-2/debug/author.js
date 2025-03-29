// Predict and explain first...
/*Objects are collections of key-value pairs*/
// This program attempts to log out all the property values in the object.
// But it isn't working. Explain why first and then fix the +problem
/*. The for...of loop 
expects a sequence of values it can step through. 
Objects don't provide that sequence directly.*/
const author = {
  firstName: "Zadie",
  lastName: "Smith",
  occupation: "writer",
  age: 40,
  alive: true,
};

//for (const value of author) {
  //console.log(value);}
  for (const value of Object.values(author)) {
    console.log(value);
}
/* Object.keys(): returns an array of the object's property names.
Object.entries(): returns an array of key-value pairs (arrays).*/
