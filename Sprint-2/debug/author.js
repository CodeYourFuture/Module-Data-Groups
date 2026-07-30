/* Predict and explain first...
I think this will return an error because of the for...of loop.
The for...of loop is used to iterate over iterable objects like arrays, strings, maps, sets, etc.
So this will return an error because the author object is not iterable.
*/

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
