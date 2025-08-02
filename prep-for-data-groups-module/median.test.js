/*Given an array of numbers in ascending order
When we call calculateMedian with this array
Then we get the median value.
We calculate the median of a list of numbers by finding the middle value in the list.*/
const calculateMedian = require("./median")
test("Calculate the median of a list of odd length", () => {
  const list =[10,20,30,50,60];
  const currentOutput = calculateMedian(list);
  const targetOutput = 30;
  expect(currentOutput).toEqual(targetOutput);

});

//adding a test to ensure our array does not mutate
test("doesn't modify the input", () => {
  const list = [1, 2, 3];
  calculateMedian(list);

  expect(list).toEqual([1, 2, 3]);
});
  // Note that the toEqual matcher checks the values inside arrays when comparing them - it doesn't use `===` on the arrays, we know that would always evaluate to false.
