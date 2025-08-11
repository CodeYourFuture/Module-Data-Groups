// Predict and explain first...
//I think it is going to be undefined,because in console.log they want to print-address[0]but this is for arrays.We have an object.We can not access an object as array.

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
