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

//console.log(`My house number is ${address[0]}`);
// Objects in javascript are key,value types that is why the code  is not working,
// We are trying to access house number using the key "0"

console.log(`My house number is ${address.houseNumber}`);
