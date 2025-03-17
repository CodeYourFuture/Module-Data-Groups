// Predict and explain first...
/*
the code log will be " My house number is undefined ", because we trying to access the houseNumber property of address
object suing an index 0 like on array (address[0]) but address is an object not array  
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

console.log(`My house number is ${address["houseNumber"]}`);
//or
console.log(`My house number is ${address.houseNumber}`);