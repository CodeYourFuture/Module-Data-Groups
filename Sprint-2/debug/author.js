// Predict and explain first...
/*
It will throw an error because of the for loop "const value of author" ,for ... of is used for iterable objects like array,strings...
and after changing the for... of to for...in the program still currently attempts to log out all the property of the object
which is 
         firstName
         lastName
         occupation
         age
         alive
but the program is needed to log out all the property values in the object
=>    Zadie
      Smith
      writer
      40
      true
*/
// This program attempts to log out all the property values in the object.
// But it isn't working. Explain why first and then fix the problem

const author = {
  firstName: "Zadie",
  lastName: "Smith",
  occupation: "writer",
  age: 40,
  alive: true,
};

for (const key in author) {
  console.log(author[key]);
}
