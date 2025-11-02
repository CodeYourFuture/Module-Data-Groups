// Predict and explain first...
/* address[0] does not access the houseNumber property of the address object. In JavaScript, objects are 
accessed using their property names, not numerical indices. Therefore, address[0] is undefined because 
there is no property with the key '0' in the address object. To access the houseNumber property, we should 
use address.houseNumber or address['houseNumber']. */

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
