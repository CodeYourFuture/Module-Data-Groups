// Predict and explain first...
I predict that the code will not log out  the housenumber 
because there is no method declared inside the object to return the object's properties. 
// This code should log out the houseNumber from the address object
// but it isn't working...
// Fix anything that isn't working
when I run the code it give this message as output (My house number is undefined).
when I changed the console.log declaration to :
console.log('my house number is' + ' ' + address.houseNumber);
it give the right output for the house number. 

const address = {
  houseNumber: 42,
  street: "Imaginary Road",
  city: "Manchester",
  country: "England",
  postcode: "XYZ 123",
};

// console.log(`My house number is ${address[0]}`);
console.log('my house number is' + ' ' + address.houseNumber);

when I checked an AI tool it explained that address is an object, not an array.
So address[0] tries to access a property with the key "0" — which doesn’t exist → undefined.
to access the houseNumber property we need to use the property name not an index.
