const totalTill = require("./till");


describe("totalTill()", () => {
    test("calculates the correct total from the till", () => {
        const till = {
            "1p": 10,   // 10p
            "5p": 6,
            "50p": 4,   // 200p
            "20p": 10   // 200p
            };
        const result = totalTill(till);
        expect(result).toBe("£4.40");
    });
    
    
        test("returns £0.00 for an empty till", () => {
            expect(totalTill({})).toBe("£0.00");
        });
        test("ignores non-numeric keys", () => {
            const till = {
                "20p" : 10,
                "?p": 5
            };
            expect(totalTill(till)).toBe("£2.00");
        });
        test("handles large quantities correctly", () => {
            const till = {
                "1p": 10000, 
                "5p": 2000,
            };
            expect(totalTill(till)).toBe("£200.00");
        });
        test("works with the single coin type", () => {
            const till = {
                "20p": 3,
            };
            expect(totalTill(till)).toBe("£0.60");
        });


    });