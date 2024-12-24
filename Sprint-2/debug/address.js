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

//console.log(`My house number is ${address[0]}`);
console.log(`My house number is ${address.houseNumber}`);
// to access the houseNumber property of the address object using an array index (address[0]), which doesn't exist.
// object properties are accessed by their keys rather than by array indices