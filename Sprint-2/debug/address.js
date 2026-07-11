/* Predict and explain first...

My prediction is that when I run this code it will return undefined.
This is because this is an object not an array, objects are not indexed by numbers, they are indexed by keys. 
So when i try to access address[0], it will return undefined because there is no key '0' in the address object.

*/

const address = {
  houseNumber: 42,
  street: "Imaginary Road",
  city: "Manchester",
  country: "England",
  postcode: "XYZ 123",
};

console.log(`My house number is ${address.houseNumber}`);
