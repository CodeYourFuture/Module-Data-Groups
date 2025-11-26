// Predict and explain first...
//Prediction: The will be an error at ${address[0]}.
//Explanation: calling an object using the index as in array. Instead we should use the dot method(.address) or the brackets["address"].


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
