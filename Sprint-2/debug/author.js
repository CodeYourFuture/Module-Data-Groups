// Predict and explain first...

// This program attempts to log out all the property values in the object.
// But it isn't working. Explain why first and then fix the problem
// predictions: this would return undefined as line 14 should be const value in the object not of the object type. 
// explanation: the code want to access the value but cant do so by declaring it as a const. we have to loop through the keys to get the value. 

const author = {
  firstName: "Zadie",
  lastName: "Smith",
  occupation: "writer",
  age: 40,
  alive: true,
};
// // for (const value of author) {
//   console.log(value);

// refactor the above code to use a for...in loop to iterate over the object's properties and log their values.
for (const key in author) { 
  // this would iterate over the keys of the object. and the value would be the value of the key. 
// Output: Zadie, Smith, writer, 40, true
  
  console.log(author[key]); // reason for using a bracket notation, as this would access the values in the object of the key. This would log out the values of the object.
}


