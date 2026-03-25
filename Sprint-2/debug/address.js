// Predict and explain first...

// This will log "My house number is undefined" because
// address[0] is looking for index 0 like it's an array, but address
// is an object. To get a value from an object you need to use the
// key name, not a number. Changing address[0] to address.houseNumber
// will fix it and log "My house number is 42".

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