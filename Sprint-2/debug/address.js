// Predict and explain first...
// inside the string template the way the calling the dic is different.
// The code is trying to access the `houseNumber` property of the `address` object
// using an array index notation, which is incorrect.
// Instead, it should use dot notation or bracket notation with the property name as a string.


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

console.log(`My house number is ${address["houseNumber"]}`);