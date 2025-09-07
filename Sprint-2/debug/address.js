// The code is trying to log the houseNumber from the address object.
// But it uses address[0], which tries to access the property with key "0".
// Since address is an object with keys like "houseNumber", "street", etc., there is no property 0.
// Therefore, address[0] will be undefined.
// The console will output:
// My house number is undefined

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