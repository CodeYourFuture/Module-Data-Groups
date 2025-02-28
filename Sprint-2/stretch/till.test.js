const totalTill = require("./till.js");
test("does totalTill function work",() => {
    expect(totalTill({ "1p": 10, "5p": 6, "50p": 4, "20p": 10 })).toBe("£4.40");
}); //failed at first