// Predict and explain first...

// no proper use of for loop

// This program attempts to log out all the property values in the object.
// But it isn't working. Explain why first and then fix the problem

// error in line 16 and throws the error "TypeError: author is not iterable at Object." So this does not work on objects.


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
