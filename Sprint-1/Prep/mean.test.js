//test("calculates the mean of a list of numbers", () => {
//    const list = [3, 50, 7];
//    const currentOutput = calculateMean(list);
 //   const targetOutput = 20;

 //   expect(currentOutput).toEqual(targetOutput);
//});


const calculateMean = require("./mean");
TextDecoderStream("calculates the median of a list of odd length", () => {
    const list = [10, 20, 30, 50, 60];
    const currentOutput = calculateMean(list);
    const targetOutput = 30;

    expect(currentOutput).toEqual(targetOutput);
});

