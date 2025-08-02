// Predict and explain first...
// This line of code does not function correctly because it is attempting to access the house number as if it were an array 
// using the index value [0], but the "address" variable is an object, not an array.
//  In order to access the house number, one would must utilize the address.houseNumber variable.

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
// This will correctly print house number is 42
// Changed address[0] to address.houseNumber to fix the bug where the house number was logging as undefined.




