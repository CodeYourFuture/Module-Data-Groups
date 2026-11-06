// Predict and explain first...

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


/* BUG: address[0] is undefined because objects aren't indexed by number.
 FIX: useed the property name: address.houseNumber
console.log(`My house number is ${address.houseNumber}`);
