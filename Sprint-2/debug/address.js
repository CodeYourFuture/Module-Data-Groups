// Predict and explain first...

// address[0] will not work here as we have an object of key-value pairs. instead of square bracket notation we need the dot notation with the key
// I would think it returns undefined.

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
