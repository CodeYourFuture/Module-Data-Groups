// Predict and explain first...
// Should trow an error because `author` is an object, not an iterable.

// The is trying to display the houseNumber property of the address object.
// However, the code is using the wrong syntax to access the property.
// The correct way to access a property in an object is using either dot notation or bracket notation
// but the code is using an incorrect syntax that does not access the property correctly.

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
