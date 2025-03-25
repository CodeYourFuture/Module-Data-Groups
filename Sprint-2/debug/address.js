// Predict and explain first...

// This code should log out the houseNumber from the address object
// but it isn't working...
// Fix anything that isn't working
/*
const address = {
  houseNumber: 42,
  street: "Imaginary Road",
  city: "Manchester",
  country: "England",
  postcode: "XYZ 123",
};

console.log(`My house number is ${address[0]}`);   

The property houseNumber is accessed using square brackets (address[0]), which is incorrect.
*/


//________________________________________________SOLUTION____________________________________________________


// The property houseNumber is incorrectly accessed using square brackets (address[0])
// We must use dot notation instead to access the property value associated with a key.
// I use dot notation (address.houseNumber), which is the simplest and most common way to retrieve known properties from an object in JavaScript.

// The correct code is: 

const address = {
  houseNumber: 42,
  street: "Imaginary Road",
  city: "Manchester",
  country: "England",
  postcode: "XYZ 123",
}

console.log(`My house number is ${address.houseNumber}`);

// The output is: My house number is 42