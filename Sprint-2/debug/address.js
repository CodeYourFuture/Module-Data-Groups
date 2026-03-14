// Predict and explain first...

// The code is trying to log the house number from the address object, but it is using the wrong syntax to access the property. The code is currently using address[0], which is incorrect because it is trying to access the first element of an array, but address is an object, not an array.

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
