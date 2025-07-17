// Predict and explain first...
// The code is trying to access the houseNumber property of the address object
// but it's using an incorrect syntax. Instead of using address[0],
// it should use address.houseNumber or address['houseNumber'].

// This code should log out the houseNumber from the address object
// but it isn't working...
// It logs `undefined` because `address[0]` is trying to access the first element 
// of an array, but `address` is an object, not an array.

// Fix anything that isn't working

const address = {
  houseNumber: 42,
  street: "Imaginary Road",
  city: "Manchester",
  country: "England",
  postcode: "XYZ 123",
};

console.log(`My house number is ${address['houseNumber']}.`);
