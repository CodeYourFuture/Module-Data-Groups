const test = require("node:test");
const assert = require("node:assert/strict");
const contains = require("./contains.js");

test("contains on empty object returns false", () => {
  assert.equal(contains({}, "a"), false);
});

test("contains returns true when object has the property", () => {
  assert.equal(contains({ a: 1, b: 2 }, "a"), true);
});

test("contains returns false when object does not have the property", () => {
  assert.equal(contains({ a: 1, b: 2 }, "c"), false);
});

test("contains throws when passed a non-object", () => {
  const error = {
    name: "Error",
    message: "contains requires an object",
  };

  assert.throws(() => contains([1, 2, 3], "a"), error);
  assert.throws(() => contains("abc", "a"), error);
  assert.throws(() => contains(123, "a"), error);
  assert.throws(() => contains(null, "a"), error);
  assert.throws(() => contains(undefined, "a"), error);
  assert.throws(() => contains(), error);
});