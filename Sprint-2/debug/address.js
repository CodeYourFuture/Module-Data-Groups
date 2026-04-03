const address = {
  houseNumber: 42,
  street: "Imaginary Road",
  city: "Manchester",
  country: "England",
  postcode: "XYZ 123",
};

/* Prediction */
// This will throw an error. This is because unlike lists, key values are selected using a '.'
console.log(`My house number is ${address[0]}`);

/* Fix */
console.log(`My house number is ${address.houseNumber}`);
