// Predict and explain first...

// I predict that the code will give undefined result, because objects access properties using the key names not indexes
// And the square bracket will generate a reference error because the houseNumber will be treated
//  as a variable name not property key

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
