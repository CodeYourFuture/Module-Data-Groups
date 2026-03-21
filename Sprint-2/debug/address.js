// Predict and explain first...
//  address is an object, not an array
// address[0] looks for a property named "0",
// which doesn't exist → returns undefined
// So the log will say: My house number is undefined

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
