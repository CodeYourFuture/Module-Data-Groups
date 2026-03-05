// Predict and explain first...
// The code is trying to access the houseNumber property of the address object using an index, which is not correct.
// In JavaScript, objects are accessed using their property names, not indices. 
// To fix this, we should use the property name 'houseNumber' instead of an index.

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
