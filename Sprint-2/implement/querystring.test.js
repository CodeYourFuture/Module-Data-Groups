// In the prep, we implemented a function to parse query strings.
// Unfortunately, it contains several bugs!
// Below is one test case for an edge case the implementation doesn't handle well.
// Fix the implementation for this test, and try to think of as many other edge cases as possible - write tests and fix those too.

const parseQueryString = require("./querystring.js")

test("given a queryString with no query parameters, returns an empty object", function () {
  const input = "";
  const currentOutput = parseQueryString(input);
  const targetOutput = {};
  expect(currentOutput).toEqual(targetOutput);
});

test("given a queryString with one pair of query params, returns them in object form", function () {
  const input = "fruit=banana";
  const currentOutput = parseQueryString(input);
  const targetOutput = { fruit: "banana" };
  expect(currentOutput).toEqual(targetOutput);
});

test("given a queryString with multiple pairs of query params, returns them in object form",() => {
  const input = "fruit=banana&music=florence&flavour=umami";
  const currentOutput = parseQueryString(input);
  const targetOutput = {fruit: "banana", music: "florence", flavour: "umami"};
  expect(currentOutput).toEqual(targetOutput);
});


test("parses querystring values containing =", () => {
  expect(parseQueryString("equation=x=y+1")).toEqual({"equation": "x=y+1"});
});


// handles missing "="
test("when = is missing between a key-pair, the text should be interpreted as a key with an empty value", () => {
  const missingEquals = "foo&noms=cheese";
  const missingEqualsTO = {foo:"", noms:"cheese"};
  expect(parseQueryString(missingEquals)).toEqual(missingEqualsTO);
})

// handles missing value
// no extra code was written for this test to pass - .slice("x") will return an empty string if there is nothing after "x"
test(`when a pair is missing a value, queryString should return 'key: ""' for that item`, () => {
  const missingValue = "foo=&noms=cheese";
  const missingValueTO = {foo:"", noms:"cheese"};
  expect(parseQueryString(missingValue)).toEqual(missingValueTO);
})


// handles missing key ("=bar&noms=cheese")
// no extra code was written for this test to pass - .slice("x") will return an empty string if there is nothing before "x"
test(`when a pair is missing a key, queryString should return "":"value" for that item`, () => {
  const missingKey = "=bar&noms=cheese";
  const missingKeyTO = {"":"bar", noms: "cheese"};
  expect(parseQueryString(missingKey)).toEqual(missingKeyTO);
})

//duplicate keys ("x=1&x=2" => {x:2} / last one wins)
// no extra code was written to pass this test - line 19 of the code simply overwrites the old value with the new one
test(`when a queryString contains values assigned to the same key, the last value assigned to that key in the string should be the one that is returned as part of the object`, ()=> {
  const repeatKeys = "one=one&two=two&four=notthisone&four=four"
  const repeatKeysTO = {one: "one", two: "two", four: "four"};
  expect(parseQueryString(repeatKeys)).toEqual(repeatKeysTO);
})


