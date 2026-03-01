// Predict and explain first...
//The issue with this program is that console.log is logging the address but is an obkect. address[0] only works for arrays. 
//As address is an object, we must use a key rather than numeric indexes. 
//Also there is no property called "0" inside address.

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
