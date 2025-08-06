// Predict and explain first...

// The code will print undefined because address[0] is incorrect. To access a value in an object, 
// we need to use either dot notation (address.houseNumber) or bracket notation with 
// the key name (address["houseNumber"]). Using a number like 0 won’t work unless 
// the object has a property with that exact key.

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

// console.log(`My house number is ${address[0]}`);
// Fixed code:
console.log(`My house number is ${address.houseNumber}`);



