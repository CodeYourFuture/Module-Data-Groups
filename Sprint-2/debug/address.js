// Predict and explain first...
// With the code as written, running the file will print: My house number is undefined
// Why is this happening?
// Because the address object does not have a property with the key 0 - which is what address[0] is trying to access. The houseNumber is a property of the address object, so it should be accessed using dot notation (address.houseNumber) instead of bracket notation with an index (address[0]).
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
// debug info
console.log("address object:", address);
console.log(
  "address.houseNumber (type):",
  typeof address.houseNumber,
  address.houseNumber
);
