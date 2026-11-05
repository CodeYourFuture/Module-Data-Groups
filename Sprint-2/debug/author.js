// explanation:
// The code could not be executed because the for...of loop could not access object "author".
// for...loops are used in arrays, strings or with certain array methods.

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
