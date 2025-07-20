// Predict and explain first...

/*When we run this code, it gives an error:
TypeError: author is not iterable

This happens because the for...of loop only works with iterable data types, like arrays or strings.
But author is a plain object, and objects are not iterable by default.

So when we try to use for...of directly on the object, JavaScript doesn’t know how to loop through it.*/
// This program attempts to log out all the property values in the object.
// But it isn't working. Explain why first and then fix the problem
//To fix the code, we can use Object.values(author).This method gives us an array of all the values in the object.

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
