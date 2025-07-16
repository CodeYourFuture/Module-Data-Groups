// Predict and explain first...
// I think this code will log out "My house number is undefined"
// because address[0] is trying to access an index that doesn't exist in the object.

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

console.log(`My house number is ${address[0]}`);
