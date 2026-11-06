// Predict and explain first...

// my prediction here is that we can not use for..of loop because author is not iterable.
// The reason is, it doesnt use indices it uses keys.instead we will use for..in loop.

// This program attempts to log out all the property values in the object.
// But it isn't working. Explain why first and then fix the problem

// As I said earlier it is not using index, we can not iterate it with
// for ..of loop. The output also gonna be the key so we have to change that as well.

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
