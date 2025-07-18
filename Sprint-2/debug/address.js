// Predict and explain first...
/* Objects store data as key-values pairs, they don't have indices like arrays. In the object below, there is no "0" key. So address[0] is undefined and the print out will probably say "My house number is undefined" */

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

console.log(`My house number is ${address.houseNumber}.`);
