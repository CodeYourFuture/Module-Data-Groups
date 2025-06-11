// Predict and explain first...
  // The address object is being treated like an array. If address was an array,
  // address[0] would be the index of the house number. This is however an object.
  // to access the houseNumber, you would use address.houseNumber

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
