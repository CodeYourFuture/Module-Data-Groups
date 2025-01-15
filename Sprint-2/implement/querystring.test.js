// In the prep, we implemented a function to parse query strings.
// Unfortunately, it contains several bugs!
// Below is one test case for an edge case the implementation doesn't handle well.
// Fix the implementation for this test, and try to think of as many other edge cases as possible - write tests and fix those too.

const parseQueryString = require("./querystring.js")

test("parses querystring values containing =", () => {
  expect(parseQueryString("equation=x=y+1")).toEqual({
    "equation": "x=y+1",
  }); // passes now that we changed the const [key, value] = pair.split("=");
});
  it('parses a single key-value pair', () => {
    expect(parseQueryString('name=John')).toEqual({ name: 'John' });
  });

  it('parses multiple key-value pairs', () => {
    expect(parseQueryString('name=John&age=30&city=NewYork')).toEqual({
      name: 'John',
      age: '30',
      city: 'NewYork',
    });
  });

  it('handles empty querystrings', () => {
    expect(parseQueryString('')).toEqual({});
  }); //empty test

  it('handles querystrings with only a key (no value)', () => {
    expect(parseQueryString('key')).toEqual({ key: '' });
  }); //just-the-tip test

    it('handles querystrings with empty values', () => {
        expect(parseQueryString('name=&age=')).toEqual({name:"", age:""})
    }) //tough 1

    // it('handles querystrings with encoded characters', () => {
    //     expect(parseQueryString('name=John%20Doe&age=30%2B')).toEqual({name:"John Doe", age:"30+"})
    // }) //this continues to fail



