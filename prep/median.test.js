const calaculateMedian = require("./median");

test("Calculate the median of the list of numbers", () => {
    const list = [10, 20, 30, 40, 50];
    const currentOutput = calaculateMedian(list);
    const targetOutput = 30;

    expect(currentOutput).toEqual(targetOutput);
})

// test("should not mutate the list of numbers", () => {
//     const list = 
// })