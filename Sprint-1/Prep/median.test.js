const calculateMedian = require("./median");

//First test case of odd length of an array
test("calculates the median of a list of odd length", () => {
    const list = [10, 20, 30, 50, 60];
    const currentOutput = calculateMedian(list);
    const targetOutput = 30.0;
  
    expect(currentOutput).toEqual(targetOutput);
  });

  //Second test case of even length of an array
  test("calculates the median of a list of even length", () => {
    const list = [10, 20, 30, 50, 60, 70];
    const currentOutput = calculateMedian(list);
    const targetOutput = 40.0;
    expect(currentOutput).toEqual(targetOutput);
    });