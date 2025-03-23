// Predict and explain first...

// This code should log out the houseNumber from the address object
// but it isn't working...
// Fix anything that isn't working

//Prediction : I will get an error when running this code because address is an object , not an array.
//To access the property of an object dot notation or  bracket notation with a string key  should be used instead of bracket index.
const address = {
  houseNumber: 42,
  street: "Imaginary Road",
  city: "Manchester",
  country: "England",
  postcode: "XYZ 123",
};

// console.log(`My house number is ${address[0]}`);

//Refactored code

console.log(`My house number is ${address.houseNumber}`);

//Or

console.log(`My house number is ${address["houseNumber"]}`);
