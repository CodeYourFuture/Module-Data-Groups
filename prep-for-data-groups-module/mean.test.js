/*
In this test, we’re checking we get a value of 20 by adding together 3 + 50 + 7 and then dividing by the number of items (3). We calculate the mean of a list of numbers by:
summing all the numbers in the array
dividing the sum by the length of the array*/

const calculateMean = require('./mean')

test("Calculate the mean of a list of numbers", () =>{
  const list = [3, 50, 7]
  const currentOutPut = calculateMean(list);
  const targetOutPut = 20;
  expect(currentOutPut).toEqual(targetOutPut);

});
