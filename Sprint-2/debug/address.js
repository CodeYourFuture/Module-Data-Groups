// Predict and explain first...
// it will print out My house number is undefined because the address is object rather than array so address[0] will look for property 0 which does not exit

// This code should log out the houseNumber from the address object
// but it isn't working...
// Fix anything that isn't working, it should be address.houseNumber in order to get value 42

const address = {
  houseNumber: 42,
  street: "Imaginary Road",
  city: "Manchester",
  country: "England",
  postcode: "XYZ 123",
};

console.log(`My house number is ${address.houseNumber}`);
