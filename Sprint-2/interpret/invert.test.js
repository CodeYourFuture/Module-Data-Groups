const invert = require("./invert");

test(`when tally is passed an object, it returns a new object with the keys and values inverted`, () => {
    const obj = {foo:"bar", cheese:"crackers", Michael:"Jackson"};
    const objTO = {bar:"foo", crackers:"cheese", Jackson:"Michael"};
    expect(invert(obj)).toEqual(objTO);
})