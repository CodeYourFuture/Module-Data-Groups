// Predict and explain first...
// this code will throw an error. because the text `My house number is ${address[0]}` is not inside backticks.
// so JavaScript doesn’t see it as a string.
// Instead, it thinks `My` is a variable name, but that variable doesn’t exist.
// This code should log out the houseNumber from the address object
// but it isn't working...
// Fix anything that isn't working

const address = {
  houseNumber: 42,
  street: "Imaginary Road",
  city: "Manchester",
  country: "England",
  postcode: "XYZ 123",
};

console.log(`My house number is ${address.houseNumber}`);
