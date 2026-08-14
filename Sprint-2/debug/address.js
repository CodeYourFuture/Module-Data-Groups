// Predict and explain first...
//'My house number is 42' 
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

// address[0] uses array-style index access. Since address is an object, we need to access the property using its property name.
// It returns undefined because the object does not have a property called 0.
// We can use dot notation (.) to access the houseNumber property of the object.
//The original syntax, address[0], uses index access, which is commonly used with arrays. Since address is an object, we need to access the property using its name. address[0] returns undefined because the object does not have a property called 0. We can use dot notation, address.houseNumber, to access the houseNumber property.