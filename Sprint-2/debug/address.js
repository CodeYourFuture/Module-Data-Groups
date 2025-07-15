// Predict and explain first...

// The code attempts to log out the houseNumber using[0] which is index. In this case, it will return undefined. Because
// values in the object are not accessed by index but by property name.
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

console.log(`My house number is ${address.houseNumber}.`);
