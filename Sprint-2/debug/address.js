// Predict and explain first...
// This code is intended to log the house number from the address object.
// The expected output is: "My house number is 42"
// However, if there are any issues with the code, it may not log correctly.
// The code uses bracket notation to access the houseNumber property,
// but it incorrectly uses an index (0) instead of the property name.
// The correct way to access the property is by using the property name as a string.


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

console.log(`My house number is ${address["houseNumber"]}`);
