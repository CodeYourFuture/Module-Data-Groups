// Predict and explain first...
/*
some kind of error will occur because of the (for .. of) loop, it works in iterables such as array and strings not objects 
since author is an object the code will not work as intended 
when running the code type error occur
for (const value of author) {
                    ^

TypeError: author is not iterable
    at Object.<anonymous> 
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
/*
for (const value of author) {
  console.log(value);
}
*/
// using (for .. in) loop to iterate over the keys of the object 
for (const value in author){
  console.log(author[value]);
}