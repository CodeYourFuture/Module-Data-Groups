// Predict and explain first...
// value is undefined, its not seen in the code at all.
// Ah error said it is not iterable, i didnt spot the for...of loop there, so its not seeing the value as an option in the object.
// This program attempts to log out all the property values in the object.
// But it isn't working. Explain why first and then fix the problem

const author = {
  firstName: "Zadie",
  lastName: "Smith",
  occupation: "writer",
  age: 40,
  alive: true,
};

for (const value of author) {
  console.log(value);
}
