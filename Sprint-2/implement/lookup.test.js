const createLookup = require("./lookup.js");

test("given an array with inner arrays like [key,value], createLookup should return an object made from the key-value pairs", () => {
  const countryCurrency = [['US', 'USD'], ['CA', 'CAD']];
  const lookup = {US: 'USD', CA: 'CAD'};
  expect(createLookup(countryCurrency)).toEqual(lookup);
});


test("the first item of each inner array should be a two-letter country code. if this is not the case, createLookup should throw an error", () => {
  const invalidArr = [['beans, toast'],['CA', 'CAD']]
  expect(() => createLookup(invalidArr)).toThrow();
})

test("the second item of each inner array should be a three-letter currency code. if this is not the case, createLookup should throw an error", () => {
  const invalidArr = [['beans, toast'],['CA', 'CAD']]
  expect(() => createLookup(invalidArr)).toThrow();
})

// would love to hear your thoughts on tests like this. are they useful? what about deliberately writing side effects into a function? not sure what I should google to learn more about these things.
test("any one or multiple inner arrays with length > 2 should cause createLookup to warn the user that any data after inner array index 1 will be ignored during object creation", () => {
  const tooLong = [['US','USD'],['CA','CAD','maple syrup']];
  const warnSpy = jest.spyOn(console,'warn').mockImplementation(()=>{});
  createLookup(tooLong);
  expect(warnSpy).toHaveBeenCalledWith(expect.stringContaining("data will be ignored"));
  warnSpy.mockRestore();
})

/*

Create a lookup object of key value pairs from an array of code pairs

Acceptance Criteria:

Given
 - An array of arrays representing country code and currency code pairs
   e.g. [['US', 'USD'], ['CA', 'CAD']]

When
 - createLookup function is called with the country-currency array as an argument

Then
 - It should return an object where:
 - The keys are the country codes
 - The values are the corresponding currency codes

Example
Given: [['US', 'USD'], ['CA', 'CAD']]

When
createLookup(countryCurrencyPairs) is called

Then
It should return:
 {
   'US': 'USD',
   'CA': 'CAD'
 }
*/
