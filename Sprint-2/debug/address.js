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

// console.log(`My house number is ${address[0]}`);
//This is wrong because address is not an array to address the elements within it by their index, address is an object, we need to call address first and then call the key houseNumber

console.log(address.houseNumber);
console.log(address["houseNumber"]);