// Predict and explain first...

// This code should log out the houseNumber from the address object
// but it isn't working...
// Fix anything that isn't working

// I Think the issue isin the console.log statement. i will fix it buy using dot notation to access the houseNumber property of the address object.
// It is trying to access the houseNumber using an index, but it should use the property houseNumber.
const address = {
  houseNumber: 42,
  street: "Imaginary Road",
  city: "Manchester",
  country: "England",
  postcode: "XYZ 123",
};

console.log(`My house number is ${address.houseNumber}`);
