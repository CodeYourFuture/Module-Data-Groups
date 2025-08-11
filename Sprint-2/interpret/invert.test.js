const invert = require("./invert");

// "inverts" objects
test(`when tally is passed an object, it returns a new object with the keys and values inverted`, () => {
    const obj = {foo:"bar", cheese:"crackers", Michael:"Jackson"};
    const objTO = {bar:"foo", crackers:"cheese", Jackson:"Michael"};
    expect(invert(obj)).toEqual(objTO);
})

// handles empty values
test(`when tally is passed an object with empty values, it should still be able to invert the object`, () => {
    const emptyValue = {hello:"world", goodbye:""};
    const emptyValueTO = {world:"hello", "":"goodbye"};
    expect(invert(emptyValue)).toEqual(emptyValueTO);
})

// handles empty keys
test(`when tally is passed on object with "" as a key, it should still be able to invert the object`, () => {
    const emptyKey = {"":"shhh", music:"Hole"};
    const emptyKeyTO = {shhh:"", Hole:"music"};
    expect(invert(emptyKey)).toEqual(emptyKeyTO);
})

// handles undefined values
test(`when tally is passed an obect that has a value "undefined", it should still be able to invert the object`, () => {
    const undef = {state:"tired", feelings: undefined};
    const undefTO = {tired:"state", undefined:"feelings"};
    expect(invert(undef)).toEqual(undefTO);
})

// handles false values
test(`when tally is passed an obect that has a value "false", it should still be able to invert the object`, () => {
    const untrue = {state:"tired", feelings: false};
    const untrueTO = {tired:"state", false:"feelings"};
    expect(invert(untrue)).toEqual(untrueTO);
})