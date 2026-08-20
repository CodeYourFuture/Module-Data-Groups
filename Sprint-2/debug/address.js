// Predict and explain first...
/*
Objects don't use indexes like arrays. If we try to access address[0], it returns undefined because address
is an object, not an array. Objects store values using keys (property names). To retrieve a value, we can use
either dot notation, such as address.houseNumber, or bracket notation, such as address["houseNumber"].

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
