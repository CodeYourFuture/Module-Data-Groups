// Predict and explain first...
// this code should log out undefined because even the object "address" is well defined but the property "houseNumber" is not being correctly accessed in the last line of code.
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
