// In the prep, we implemented a function to parse query strings.
// Unfortunately, it contains several bugs!
// Below is one test case for an edge case the implementation doesn't handle well.
// Fix the implementation for this test, and try to think of as many other edge cases as possible - write tests and fix those too.

const parseQueryString = require("./querystring.js")

function parseQueryString(queryString) {
    const queryParams = {};
    if (queryString.length === 0) {
        return queryParams;
    }
    const keyValuePairs = queryString.split("&");

    for (const pair of keyValuePairs) {
        const [key, ...valueParts] = pair.split("="); // Split on the first '='
        const value = valueParts.join("="); // Rejoin the rest as the value
        queryParams[key] = value || ""; // Handle cases where value is undefined
    }

    return queryParams;
}

// Updated test cases
test("parses querystring values containing =", () => {
    expect(parseQueryString("equation=x=y+5")).toEqual({
        "equation": "x=y+5",
    });
});

test("parses querystring with empty value", () => {
    expect(parseQueryString("key=")).toEqual({
        "key": "",
    });
});

test("parses querystring with no key and value", () => {
    expect(parseQueryString("=")).toEqual({
        "": "",
    });
});

test("parses querystring with multiple key-value pairs", () => {
    expect(parseQueryString("key1=value1&key2=value2")).toEqual({
        "key1": "value1",
        "key2": "value2",
    });
});

test("parses querystring with empty key-value pair", () => {
    expect(parseQueryString("&")).toEqual({
        "": "",
    });
});

test("parses querystring with no key but value", () => {
    expect(parseQueryString("=value")).toEqual({
        "": "value",
    });
});

test("parses querystring with special characters", () => {
    expect(parseQueryString("key1=hello world&key2=Hi")).toEqual({
        "key1": "hello world",
        "key2": "Hi",
    });
});