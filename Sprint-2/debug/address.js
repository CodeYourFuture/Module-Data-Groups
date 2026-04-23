// Predict and explain first...

// The console.log statement is attempting to use an index [0] but const address is structured as an object not an array.
// Since there is no property named 0 in the address object the console.log will return the string plus undefined.
// We must use key value pairs to get the value. To locate items from an object we can either use dot notation or bracket notation.

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
