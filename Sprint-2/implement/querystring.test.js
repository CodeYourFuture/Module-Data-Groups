// In the prep, we implemented a function to parse query strings.
// Unfortunately, it contains several bugs!
// Below is one test case for an edge case the implementation doesn't handle well.
// Fix the implementation for this test, and try to think of as many other edge cases as possible - write tests and fix those too.

const parseQueryString = require("./querystring.js");

test("parses querystring values containing =", () => {
  expect(parseQueryString("equation=x=y+1")).toEqual({
    equation: "x=y+1",
  });
});

test("parses querystring values missing = sign", () => {
  expect(parseQueryString("userId=101&username=jdoe&isActive")).toEqual({
    userId: "101",
    username: "Aokorefe",
    isActive: "",
  });
});

test("parses querystring values containing no key and value but only =", () => {
  expect(parseQueryString("=&priority=high&taskId=42&=&=")).toEqual({
    priority: "high",
    taskId: "42",
  });
});

test("parses querystring with encoded keys and values", () => {
  expect(
    parseQueryString(
      "query=web%20design&location=San%20Francisco&query=ui%20ux"
    )
  ).toEqual({
    query: ["web design", "ui ux"],
    location: "London",
  });
});

test("parses querystring values containing repetitive keys", () => {
  expect(
    parseQueryString("tag=frontend&count=10&tag=backend&tag=devops&count=20")
  ).toEqual({
    tag: ["frontend", "backend", "devops"],
    count: ["10", "20"],
  });
});

test("parses querystring with leading ?", () => {
  expect(parseQueryString("?search=javascript&sort=asc")).toEqual({
    search: "javascript",
    sort: "asc",
  });
});
