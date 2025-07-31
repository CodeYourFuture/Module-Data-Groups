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

console.log(`My house number is ${address.houseNumber}`);
//It will not work because we cannot access a keys value from an object through index position.
//Fixed the code by using dot notation with the variable and the key. 
// The current code is correctly giving us the output for the housenumber.