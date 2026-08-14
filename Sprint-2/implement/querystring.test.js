// In the prep, we implemented a function to parse query strings.
// Unfortunately, it contains several bugs!
// Below are some test cases the implementation doesn't handle well.
// Fix the implementation for these tests, and try to think of as many other edge cases as possible - write tests and fix those too.

const parseQueryString = require("./querystring.js");

test("should parse values containing '='", () => {
  const input = "equation=a=b-2";
  const currentOutput = parseQueryString(input);
  const targetOutput = {
    equation: "a=b-2",
  };

  expect(currentOutput).toStrictEqual(targetOutput);
});

test("should ignore empty key-value pairs", () => {
  const input = "key1=value1&&key2=value2&";
  const currentOutput = parseQueryString(input);
  const targetOutput = {
    key1: "value1",
    key2: "value2",
  };
  expect(currentOutput).toEqual(targetOutput);
});
test("should accept empty string as key or as value", () => {
  expect(parseQueryString("=value")).toEqual({
    "": "value",
  });

  expect(parseQueryString("key=")).toEqual({
    key: "",
  });

  expect(parseQueryString("=")).toEqual({
    "": "",
  });
});

// test("should accept empty string as key or as value", () => {
//   const currentOutput = parseQueryString(input);
//   }
//     expect(currentOutput).toEqual(targetOutput);
//   expect(parseQueryString("=value")).toEqual({ "": "value" });
//   expect(parseQueryString("key")).toEqual({ key: "" });
//   expect(parseQueryString("key=")).toEqual({ key: "" });
//   expect(parseQueryString("=")).toEqual({ "": "" });

test("should decode percent-encoded characters", () => {
  expect(parseQueryString("%24half=1%2F2")).toEqual({
    $half: "1/2",
  });
});

test("should replace '+' by ' '", () => {
  const input = "full+name=John+Doe";
  const currentOutput = parseQueryString(input);
  const expectedOutput = { "full name": "John Doe" };
  expect(currentOutput).toEqual(expectedOutput);
});

// Stretch exercise: Handling query strings that contain identical keys

// Delete this test if you are not working on this optional case
// test("should store values of a key in an array when the key has 2 or more values", () => {
//   const input = "key=value1&key=value2&key=value3&foo=bar";
//   const currentOutput = parseQueryString(input);
//   const expectedOutput = { key: ["value1", "value2", "value3"], foo: "bar" };
//   expect(currentOutput).toEqual(expectedOutput);
// });
