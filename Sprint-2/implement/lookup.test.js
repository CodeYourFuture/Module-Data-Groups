const createLookup = require("./lookup.js");

test("creates a country currency code lookup for multiple codes", () => {
    // Given
    const input = [
        ["US", "USD"],
        ["CA", "CAD"],
    ];

    const expectedOutput = {
        US: "USD",
        CA: "CAD",
    };

    // When
    const result = createLookup(input);

    // Then
    expect(result).toEqual(expectedOutput);
});
