const totaltill = require("./till.js");

test("test till", () => {
    expect(totaltill({"1p": 20, "50p": 10, "20p": 10, "5p": 2})).toEqual("£" + 7.3)
});