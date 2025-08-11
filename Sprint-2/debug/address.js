// Predict and explain first...

// The result is undefined because JavaScript objects use keys, not indexes. Address[0] looks for the key "0", which doesn't exist.

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

console.log(`My house number is ${address['houseNumber']}`);

