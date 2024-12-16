// Predict and explain first...

// Answer: address[0] attempts to access a property of the address object using array-like indexing, which isn't valid for objects in JavaScript. Objects in JavaScript use keys (strings) to access properties

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
