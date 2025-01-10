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

    test("Given an invalid object of coins, it should throw an error 'Invalid coin format'", () => {
        expect(() => totalTill({ "1p": 15, "10p": 5, "£1": 2 })).toThrow("Invalid coin format");
    });

    test("Given an empty object, it should return £0.00 ", () => {
        expect(totalTill({})).toEqual("£0.00");
    });

    test("Given a single coin type object, it should return the total in pounds ", () => {
        expect(totalTill({ "50p": 20 })).toEqual("£10.00");
    });
});