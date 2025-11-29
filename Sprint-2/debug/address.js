// Predict and explain first...
//will log undefined , there is no "0" key, objects do not have indexes so we can't use [0]
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

console.log(`My house number is ${address.houseNumber}`);//or ["houseNumber"]
