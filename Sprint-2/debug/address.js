// Predict and explain first...
// I think, for object we have to use key as property value instead of array index in console.log.
// This code should log out the houseNumber from the address object
// but it isn't working...
// Fix anything that isn't working

//Correct Code:

const address = {
  houseNumber: 42,
  street: "Imaginary Road",
  city: "Manchester",
  country: "England",
  postcode: "XYZ 123",
};

console.log(`My house number is ${address.houseNumber}`);
