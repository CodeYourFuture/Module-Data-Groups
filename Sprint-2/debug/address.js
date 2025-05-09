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

console.log(`My house number is ${address[`houseNumber`]}`);

//To gain access to object value need use obj[key] or obj.key. In this case key [0] doesn't exist in address object and we can't get access to the first value like in array by number
