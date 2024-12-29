const totalTill = require('./till');

test('total for coins', () => {
    const till1 = {
        "1p": 10,
        "5p": 6,
        "50p": 4,
        "20p": 10,
    };
    expect(totalTill(till1)).toEqual("£4.40");
}
);
test('empty till', () => {

    expect(totalTill({})).toEqual("£0.00");
});

test('one type of coin', () => {
    const till2 = { "10p": 5 };
    expect(totalTill(till2)).toBe("£0.50");
});

test('should handle a till with large quantities of coins', () => {
    const till3 = { "1p": 1000 };

    expect(totalTill(till3)).toEqual("£10.00");
});