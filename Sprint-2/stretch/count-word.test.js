const countWords = require("./count-words");

test("Given an empty string, it should return an empty object", () => {
  expect(countWords("")).toStrictEqual({});
});

test("Given an non string input, it should throw an error message", () => {
  const errorMessage = "Input should be a string";
  expect(() => countWords(["non string"])).toThrow(errorMessage);
  expect(() => countWords({ a: 1 })).toThrow(errorMessage);
  expect(() => countWords(123)).toThrow(errorMessage);
  expect(() => countWords(null)).toThrow(errorMessage);
  expect(() => countWords(undefined)).toThrow(errorMessage);
  expect(() => countWords(true)).toThrow(errorMessage);
});

test("Given a valid string, it should return an object with proper count on each word", () => {
  expect(countWords("you and me and you")).toStrictEqual({
    you: 2,
    and: 2,
    me: 1,
  });
  expect(
    countWords(
      "The government has announced plans to train and recruit more workers for the UK's clean energy sector"
    )
  ).toStrictEqual({
    the: 2,
    government: 1,
    has: 1,
    announced: 1,
    plans: 1,
    to: 1,
    train: 1,
    and: 1,
    recruit: 1,
    more: 1,
    workers: 1,
    for: 1,
    "uk's": 1,
    clean: 1,
    energy: 1,
    sector: 1,
  });
});

test("Given a valid string with punctuation, it should count each word without punctuation", () => {
  expect(
    JSON.stringify(
      countWords(
        "The government has announced plans to train and recruit more workers for the UK's clean energy sector, promising to create 400,000 extra jobs by 2030."
      )
    )
  ).toStrictEqual(
    JSON.stringify({
      the: 2,
      to: 2,
      government: 1,
      has: 1,
      announced: 1,
      plans: 1,
      train: 1,
      and: 1,
      recruit: 1,
      more: 1,
      workers: 1,
      for: 1,
      "uk's": 1,
      clean: 1,
      energy: 1,
      sector: 1,
      promising: 1,
      create: 1,
      400000: 1,
      extra: 1,
      jobs: 1,
      by: 1,
      2030: 1,
    })
  );
  expect(
    countWords(
      'Plumbers, electricians and welders are among 31 priority occupations that are "particularly in demand", with employment in renewable, wind, solar and nuclear expected to double to 860,000 in five years, ministers have said.'
    )
  ).toStrictEqual({
    31: 1,
    860000: 1,
    in: 3,
    and: 2,
    are: 2,
    to: 2,
    plumbers: 1,
    electricians: 1,
    welders: 1,
    among: 1,
    priority: 1,
    occupations: 1,
    that: 1,
    particularly: 1,
    demand: 1,
    with: 1,
    employment: 1,
    renewable: 1,
    wind: 1,
    solar: 1,
    nuclear: 1,
    expected: 1,
    double: 1,
    five: 1,
    years: 1,
    ministers: 1,
    have: 1,
    said: 1,
  });
});
