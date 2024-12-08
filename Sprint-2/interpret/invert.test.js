describe("invert function", () => {
  test("inverts an object with one key-value pair", () => {
    const result = invert({ a: 1 });
    expect(result).toEqual({ "1": "a" });
  });

  test("inverts an object with multiple key-value pairs", () => {
    const result = invert({ a: 1, b: 2 });
    expect(result).toEqual({ "1": "a", "2": "b" });
  });

  test("inverts an object with more complex key-value pairs", () => {
    const result = invert({ x: 10, y: 20 });
    expect(result).toEqual({ "10": "x", "20": "y" });
  });

  test("inverts an empty object", () => {
    const result = invert({});
    expect(result).toEqual({});
  });

  test("inverts an object with numeric keys", () => {
    const result = invert({ 1: 'a', 2: 'b' });
    expect(result).toEqual({ 'a': '1', 'b': '2' });
  });
});
