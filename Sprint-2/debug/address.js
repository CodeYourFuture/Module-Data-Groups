// Predict and explain first...
// with the print statement it will not print house number as we are asking 0 th element of address not just houseNumber. 
// so we will get undefined
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
