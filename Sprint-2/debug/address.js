// Predict and explain first...
    // I predict it will give an error because when we try to access the value in key we can not index like an array(address[0]) instead we can access the value by using address["houseNumber"] or address.houseNumber 

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
