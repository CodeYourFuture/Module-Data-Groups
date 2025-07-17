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


// handles missing "=" (i.e. "foo&noms=cheese")
test("when = is missing between a key-pair, the text should be interpreted as a key with an empty value", () => {
  const missingEquals = "foo&noms=cheese";
  const missingEqualsTO = {foo:"", noms:"cheese"};
  expect(parseQueryString(missingEquals)).toEqual(missingEqualsTO);
})

// handles missing value ("foo=&noms="cheese")
test(`when a pair is missing a value, queryString should return 'key: ""' for that item`, () => {
  const missingValue = "foo=&noms=cheese";
  const missingValueTO = {foo:"", noms:"cheese"};
  expect(parseQueryString(missingValue)).toEqual(missingValueTO);
})


// handles missing key ("=bar&noms=cheese")

//duplicate keys ("x=1&x=2" => {x:2} / last one wins)


