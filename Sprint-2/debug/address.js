// Predict and explain first...
//I guess that the code will log "My house number is undefined" because address[0] isn't a valid way
// to access the houseNumber property. When we do address[0], JS looks for a property literally
// named "0", because bracket notation treats 0 as the string "0"

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
