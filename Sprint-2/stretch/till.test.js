const totalTill = require("./till");

describe("totalTill()", () => {
    test("Given a valid object of coins, it should return the total amount in pounds", () => {
        expect(totalTill({
            "1p": 10,
            "5p": 6,
            "50p": 4,
            "20p": 10,
        })).toEqual("£4.40");
    });
})