// Predict and explain first...
//Its will say undefined. This is because the address object does not have an index of 0.
// To access the houseNumber property of the address object, we need to use dot notation or bracket notation with the property name as a string

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
