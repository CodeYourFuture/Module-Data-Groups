test("given a query string with multiple key-value pairs, returns them in object form", function () {
  const input = "sort=lowest&colour=yellow";
  const currentOutput = parseQueryString(input);
  const targetOutput = { sort: "lowest", colour: "yellow" };

  expect(currentOutput).toEqual(targetOutput);
});