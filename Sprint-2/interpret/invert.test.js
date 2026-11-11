const invert = require("./invert.js");
// for
test(" should return an empty object if given empty object", () => {
  expect(invert({})).toEqual({});
});
