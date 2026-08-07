// Predict and explain first...

// This code should log out the houseNumber from the address object
// but it isn't working...
// Fix anything that isn't working

// WHY IT WASN'T WORKING:
// address[0] tries to access the element at index 0 like an array, but address is an object.
// Objects are accessed by property name, not by index.
// The fix is to use address.houseNumber (dot notation) to correctly access the property.

const address = {
  houseNumber: 42,
  street: "Imaginary Road",
  city: "Manchester",
  country: "England",
  postcode: "XYZ 123",
};

console.log(`My house number is ${address.houseNumber}`);
