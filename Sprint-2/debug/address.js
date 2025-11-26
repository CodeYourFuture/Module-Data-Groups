// Predict and explain first...

// The code will likely output undefined.
// This is because `address[0]` tries to access an object property using an array index.
// However, `address` is an object, not an array. Objects use keys (property names) to access values. 
// References: 
// - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Property_accessors#dot_notation
// - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Property_accessors#bracket_notation

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

// Access the property using dot notation or bracket notation with the key name:
// - Dot notation: `address.houseNumber` 
// - Bracket notation: `address["houseNumber"]` 

console.log(`My house number is ${address.houseNumber}`);
