test("calculates the the median of a list of odd length", () => {
    const list = [10, 20, 30, 50, 60];
    const currentOutput = calculateMedian(list);
    const targetOutput = 30;

    expect(currentOutput).toEqual(targetOutput);
});

function calculateMedian(list) {
  const middleIndex = Math.floor(list.length / 2);
  const median = list.splice(middleIndex, 1)[0];

  return median;
}