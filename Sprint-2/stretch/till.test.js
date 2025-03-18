const totalTill = require("./till.js")

describe('totalTill', () => {
    const till = {
        "1p": 10,
        "5p": 6,
        "50p": 4,
        "20p": 10,
    };
    test.only('expected to return the total amount in pounds', () => {
        expect(totalTill(till)).toEqual("£4.40");
    });
    
});
