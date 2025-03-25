// Predict and explain first...

// This code should log out the houseNumber from the address object
/*
The property houseNumber is not being accessed correctly.
address[0] tries to use an array-like indexing method, which doesn't work for object properties.
*/
// but it isn't working...
// Fix anything that isn't working

const address = {
  houseNumber: 42,
  street: "Imaginary Road",
  city: "Manchester",
  country: "England",
  postcode: "XYZ 123",
};

// console.log(`My house number is ${address[0]}`);// undefined
console.log(`My house number is ${address.houseNumber}`);
console.log(`My house number is ${address["houseNumber"]}`);
