// Predict and explain first...
// Undefined- since we're trying to log house number we should use the key "house number" like this console.log(`My house number is ${address['houseNumber']}`);

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
