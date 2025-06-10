// Predict and explain first...
 /*
 Predict
I predict My house number is undefined because it's tried to access an object address using address[0] by numeric indexes which is [0],this works for an array not an object

 */
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
