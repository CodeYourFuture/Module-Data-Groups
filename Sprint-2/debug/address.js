// Predict and explain first...

/* Prediction - the house number would return as undefined.

Explaination - "address" is a plain javascript object, not an array, arrays make use of the numeric index positions like it was used in 
the initial code but objects use key value pairs (properties) */

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
