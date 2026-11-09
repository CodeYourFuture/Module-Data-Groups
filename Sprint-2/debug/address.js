// Predict and explain first...
// I predict the code will print "My house number is defines means undefined.
// This code should log out the houseNumber from the address object
// but it isn't working...
// Explanation: address is an object, and address[0] looks for a property named "0", which does not exist.

// Fix anything that isn't working

const address = {
  houseNumber: 42,
  street: "Imaginary Road",
  city: "Manchester",
  country: "England",
  postcode: "XYZ 123",
};

console.log(`My house number is ${address["houseNumber"]}`);
