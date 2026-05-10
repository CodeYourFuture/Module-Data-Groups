// Predict and explain first...

/*
prediction: My house number is undefined
Reason: the code is trying to access the key 0 of the address object, which
does not exist.

Object properties aren't accessible by index. Author likely tried to treat it
the same as an array. Arrays are a special type of object which allows indexing into (some)
of its values.
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

console.log(`My house number is ${address.houseNumber}`);
