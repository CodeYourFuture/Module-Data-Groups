const test = require("node:test");
const assert = require("node:assert/strict");
const tally = require("./tally.js");

test("returns an empty object for an empty array", () => {
  assert.deepEqual(tally([]), {});
});

test("counts each unique item once", () => {
  assert.deepEqual(tally(["a", "b"]), {
    a: 1,
    b: 1,
  });
});

test("tallies repeated items accurately", () => {
  assert.deepEqual(tally(["a", "b", "a", "c", "a"]), {
    a: 3,
    b: 1,
    c: 1,
  });
});