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

console.log(`My house number is ${address[2]}`);
console.log(`My house number is ${address.houseNumber}`);
// The address object does not use numbers to access its data for an array. instead we must make use of stored information in key-value pairs.(houseNumber)



