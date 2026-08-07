// Predict and explain first...

// This program attempts to log out all the property values in the object.
// But it isn't working. Explain why first and then fix the problem

// WHY IT WASN'T WORKING:
// for...of works on iterables like arrays and strings, but plain objects are not iterable.
// Using `for...of author` throws a TypeError because the object has no Symbol.iterator.
// The fix is to use Object.values(author) which converts the object's values into an array,
// making it iterable so for...of can loop through each value correctly.

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
