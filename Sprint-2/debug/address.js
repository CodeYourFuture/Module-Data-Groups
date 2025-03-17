// Predict and explain first...

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

console.log(`My house number is ${address.houseNumber}`); // we console log the house number from the address object using the dot notation.

// prediction: ths code should throw an error because the object is not an array, and we don't start object keys with index 0.
// output: My house number is 42
