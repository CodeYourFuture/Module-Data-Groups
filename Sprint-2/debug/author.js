// Predict and explain first...

// This program attempts to log out all the property values in the object.
// But it isn't working. Explain why first and then fix the problem

/* The code wants to log the property value and is using a for...of loop
to make sure it logs everything, however Objects aren't in order and Javascript 
doesn't know what you want. Author is an Object and objects are not 
iterable which is the error. To fix this change (const value of author) to 
(const value of object.values(author)) to specify we want the values (not properties) 
in the Object which is 'author'. Using a loop allows up to add information in author 
without needing to make changes anywhere else while getting an updated log  */

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
