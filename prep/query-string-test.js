//https://example.com/widgets?colour=blue&sort=newest;

// { colour: blue, sort: "newest"}

describe("", () => {
  test("it will return empty object when we call parseQueryString", () => {
    const input = " ";
    const currentOutput = parseQueryString(input);
    const targetOutput = {};
    expect(currentOutput).toBe(targetOutput);
  });
});
