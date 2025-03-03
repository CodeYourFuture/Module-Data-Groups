// Predict and explain first...

// This code should log out the houseNumber from the address object
// the code have a mistake and it's because address is and object, not and array and object properties should be accessed using dot notation or bracket notation with a string key.
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
