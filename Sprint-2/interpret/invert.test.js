

const invert = require("./invert.js");

  test("swaps keys and values for a simple object", () => {
    const input = { x: 10, y: 20 };
    const output = invert(input);
    expect(output).toEqual({ 10: "x", 20: "y" });
  });