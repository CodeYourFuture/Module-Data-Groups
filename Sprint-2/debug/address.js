// Predict and explain first...

// Answer:
// The address in the code is an object not an array,
// it wont log out because we try to use the array syntax instead of the object syntax

const address = {
  houseNumber: 42,
  street: "Imaginary Road",
  city: "Manchester",
  country: "England",
  postcode: "XYZ 123",
};

console.log(`My house number is ${address.houseNumber}`);
