// Predict and explain first...

// This code should log out the houseNumber from the address object
// but it isn't working...
// Fix anything that isn't working

/*const address = {
  houseNumber: 42,
  street: "Imaginary Road",
  city: "Manchester",
  country: "England",
  postcode: "XYZ 123",
};

console.log(`My house number is ${address[0]}`);*/

//---------------------------------------------------------------------------------

/*Predict and explain first...
address is an object, not an array.
Objects don’t have numeric indexes like [0].
So address[0] returns undefined.
That’s why the output would be:
My house number is undefined
*/

//Fixed code
const address = {
  houseNumber: 42,
  street: "Imaginary Road",
  city: "Manchester",
  country: "England",
  postcode: "XYZ 123",
};

console.log(`My house number is ${address.houseNumber}`);
