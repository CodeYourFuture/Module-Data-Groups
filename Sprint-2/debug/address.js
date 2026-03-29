// Predict and explain first...
//if you run this code with console.log('My house number is ${address[0]}'); it well log out 'My house number is undefined' becouse adress is an object and not an array.
// to fix this we need to remove (`My house number is ${address[0]}`); and chnage it to (adress.houseNumber) becouse we need to access the houseNumber property of the address object.
// Then it well log out 42 as expected.

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

console.log(address.houseNumber);
