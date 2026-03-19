// Predict and explain first...

// This code should log out the houseNumber from the address object
// but it isn't working...
// Fix anything that isn't working

// i predict that it will fail straight away as value for houseNumber was not in a string
const address = {
  houseNumber: 42,
  street: "Imaginary Road",
  city: "Manchester",
  country: "England",
  postcode: "XYZ 123",
};

console.log(`My house number is ${address.houseNumber}`);

// the issue was that it was looking for the property [0] so i changed it to dot notation .houseNumber in the console.log
