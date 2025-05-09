// Predict and explain first...

// This code should log out the houseNumber from the address object
// but it isn't working...
// Fix anything that isn't working
// attention: in my dictionary, i can use both houseNumber and "houseNumber" syntax. the culprit is here: address[houseNumber] !

const address = {
  "houseNumber": 42,
  "street": "Imaginary Road",
  "city": "Manchester",
  "country": "England",
  "postcode": "XYZ 123",
};

console.log(`My house number is ${address.houseNumber}`);
