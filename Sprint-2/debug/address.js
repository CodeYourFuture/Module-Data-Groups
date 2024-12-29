// Predict and explain first...
// The current code tries to access the houseNumber property of the address object using address[0]. This doesn't work because object properties in JavaScript are typically accessed using dot notation (address.houseNumber) or bracket notation with a string key (address["houseNumber"]).

// address[0] would only work if address were an array or if there was a property with the key 0 on the object, which isn't the case here.

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

