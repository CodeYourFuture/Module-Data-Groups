// Predict and explain first...

//The code is trying to access address[0], but address is an object, not an array.
//Objects use keys (like houseNumber) instead of numeric indices.
//So address[0] is undefined, because there is no property with the key "0".

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

// The code is correct and will log "My house number is 42" to the console.

// My house number is 42
