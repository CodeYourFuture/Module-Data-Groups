// Predict and explain first...
// it will fail because the code is trying to access the houseNumber property of the address object, 
// but it is not defined correctly. The correct way to access the houseNumber property is to 
// use dot notation, like this: address.houseNumber.
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
