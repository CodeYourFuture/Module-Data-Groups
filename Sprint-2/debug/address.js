// Predict and explain first...

// Prediction: address is an object, not an array.
// Using address[0] will return undefined because objects are accessed using keys, not indexes.
// So the output will be: "My house number is undefined"

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
