// Predict and explain first...

// This outputs undefined because address[0] tries to access an object like an array.
// Objects use property names, not numeric indices.
// References:
// - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Property_accessors

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

// Fix: Dot notation accesses the property correctly
console.log(`My house number is ${address.houseNumber}`);
