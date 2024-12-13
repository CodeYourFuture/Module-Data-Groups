const address = {
  houseNumber: 42,
  street: "Imaginary Road",
  city: "Manchester",
  country: "England",
  postcode: "XYZ 123",
};

// The issue in the original code was trying to access `address[0]`.
// Objects in JavaScript use key-value pairs where keys are strings, not numeric indices like arrays.
// To access the `houseNumber` property, I used dot notation (`address.houseNumber`) or bracket notation (`address["houseNumber"]`).

console.log(`My house number is ${address.houseNumber}`);