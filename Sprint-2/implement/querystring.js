const string = "equation=x=y+1";

function parseQueryString(queryString) {
  const queryParams = {};
  if (queryString.length === 0) {
    return queryParams;
  }
  const keyValuePairs = queryString.split("&");
  console.log(keyValuePairs);

  for (const pair of keyValuePairs) {
    const [key, value] = pair.split("=");
    console.log(pair.split("="));
    queryParams[key] = value;
  }

  return queryParams;
}

console.log(parseQueryString("colour=blue&sort=newest"));

module.exports = parseQueryString;
