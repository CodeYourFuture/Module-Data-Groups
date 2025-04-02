// Predict and explain first...

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

console.log(`My house number is ${address[0]}`);

//SOLUTIONS TO CODE

// Predict and explain first...

// The current code will not log out the house number correctly.
// The reason is that the code is trying to access the 'houseNumber' property of the 'address' object using an array index, i.e., address[0], which will not work because the property is not an array and does not exist at index 0.
// Instead, the correct way to access the 'houseNumber' property is by using the property name directly, i.e., address.houseNumber.

// Now let's fix the code.

const address = {
  houseNumber: 42,
  street: "Imaginary Road",
  city: "Manchester",
  country: "England",
  postcode: "XYZ 123",
};

// Corrected version: Access the houseNumber property directly.
console.log(`My house number is ${address.houseNumber}`);
