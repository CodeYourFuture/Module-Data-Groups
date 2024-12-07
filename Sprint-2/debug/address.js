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
/*
// we can use two ways to access and object value using their key
1.Dot notation: address.houseNumber
2.Bracket notation: address["houseNumber"]

 */


// This is an array accessing but the given value is an objet so  we have to use abject accessing methodes
console.log(`My house number is ${address.houseNumber}`); 