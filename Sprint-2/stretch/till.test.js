const totalTill = require("./till.js");

describe("tills", () => {
    test("totalTill should return the total amount in pounds", () => {
        const till = {
            "1p": 10,
            "5p": 6,
            "50p": 4,
            "20p": 10,
        };
        const totalAmount = totalTill(till);
    expect(totalAmount).toEqual("£4.4");
    });

    test("totalTill should return undefined when coin is not a number", () => {
        const till = {
            "queenElizabeth": 10,
            "5p": 6,
            "50p": 4,
            "20p": 10,
        };
        const totalAmount = totalTill(till);
    expect(totalAmount).toBeUndefined();
    }); 
});