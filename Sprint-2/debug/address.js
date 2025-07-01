// Predict and explain first...
// My house number is undefined

// This code should log out the houseNumber from the address object
// but it isn't working...
// Fix anything that isn't working

// The problem is address[0] — objects are key-value pairs, not lists with indexes.
// Need use address.houseNumber to get the value by its key.

const address = {
  houseNumber: 42,
  street: "Imaginary Road",
  city: "Manchester",
  country: "England",
  postcode: "XYZ 123",
};

console.log(`My house number is ${address.houseNumber}`);
