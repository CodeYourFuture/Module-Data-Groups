// Predict and explain first...
// Ans : Object cannot iterable like array using for... of

// This program attempts to log out all the property values in the object.
// But it isn't working. Explain why first and then fix the problem
// Ans: It is taking out the property values by iterate to the object . 

const author = {
  firstName: "Zadie",
  lastName: "Smith",
  occupation: "writer",
  age: 40,
  alive: true,
};

//for (const value of author) {
  //console.log(value);
//}

//fixing the problem by using object.entries

for (const [info,value] of Object.entries(author))
{
  console.log(author[info]);
}
