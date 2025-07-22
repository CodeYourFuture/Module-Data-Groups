// Predict and explain first...
// address is an object.
// JavaScript objects don’t have numeric indices like arrays do 
// Or we have a key like "0".



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

console.log(`My house number is ${address["houseNumber"]}`);
console.log(`My house number is ${address.houseNumber}`);

