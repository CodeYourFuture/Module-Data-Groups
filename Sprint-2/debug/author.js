// Predict and explain first...
// i predict that the code is going to try to get the values from each of the keys in "author" and print them to the console
// i expect it to throw an error as its trying to loop for values of an array 
// to fix this you would need to return an array from the values of author using "object.values()" so the "for...of" loops through each value in that array
// after running the code it gives a "TypeError: author is not iterable"
// this is because for...of only works on iterables like arrays, strings, maps, etc. but author is a plain object which is not iterable by default.


// This program attempts to log out all the property values in the object.
// But it isn't working. Explain why first and then fix the problem

const author = {
  firstName: "Zadie",
  lastName: "Smith",
  occupation: "writer",
  age: 40,
  alive: true,
};

for (const value of Object.values(author)){
  console.log(value);
}
