// Predict and explain first...

// Prediction =======> My house number is undefined

// Explanation ========> Because JavaScript objects store data in key-value pairs rather than zero-indexed positions like arrays, accessing address[0] looks for a non-existent key '0' and evaluates to undefined, meaning you must use dot or bracket notation with the property name instead.

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
