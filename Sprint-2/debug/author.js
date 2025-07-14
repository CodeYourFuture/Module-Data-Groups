// Predict and explain first...

// This program attempts to log out all the property values in the object.
// But it isn't working. Explain why first and then fix the problem
/*
When I run the code I got this error (TypeError: author is not iterable).
Means that we can not do iteration through the author abject.
That's because plain objects aren't iterable like arrays.
To fix it, we need to convert the object into an iterable structure.
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

