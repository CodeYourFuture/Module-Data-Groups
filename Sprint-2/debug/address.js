// Predict and explain first...
// code is not working because we're trying to access an address property using index;
// we should instead use its key as the object address was declare using key-value pairs;

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
