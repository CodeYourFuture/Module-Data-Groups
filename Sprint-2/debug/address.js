// The original code used address[0], which doesn't work because
// address is an object, not an array. Objects have named keys, not numeric indexes.
// So address[0] is undefined.

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
