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

//my prediction is "undefined" because objects use names. When we js executes this code it is seeing address[0], it looks
//for 0 in objects, won't find it and will return , undefined. 

// i have run the code in devtools and got the "My house number is undefined" message.

//the fixed code 

const address = {
  houseNumber: 42,
  street: "Imaginary Road",
  city: "Manchester",
  country: "England",
  postcode: "XYZ 123",
};

console.log(`My house number is ${address.houseNumber}`);



