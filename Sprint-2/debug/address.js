// Predict and explain first...

// This code should log out the houseNumber from the address object
// but it isn't working.
// The bug was that the code tried to access the object using index [0].
// Objects use property names instead of numeric indexes.

const address = {
  houseNumber: 42,
  street: "Imaginary Road",
  city: "Manchester",
  country: "England",
  postcode: "XYZ 123",
};

// Correctly access the houseNumber property
console.log(`My house number is ${address.houseNumber}`);
