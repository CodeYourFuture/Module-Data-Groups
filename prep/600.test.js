function collectNumbers(list) {
  const numbersOnly = [];
  for (const item of list) {
    if (typeof item === "number") {
      numbersOnly.push(item);
    }
  }
  return numbersOnly;
}

test("only collects numbers in the array", () => {
  const currentOutput = collectNumbers([
    10.1,
    "hello",
    6.1,
    8.0,
    9.7,
    10.1,
    "hi",
    3.5,
    "oops",
  ]);
  const targetOutput = [10.1, 6.1, 8.0, 9.7, 10.1, 3.5];

  expect(currentOutput).toEqual(targetOutput);
});
