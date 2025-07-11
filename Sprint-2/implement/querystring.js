function parseQueryString(queryString) {
  const queryParams = {};
  if (queryString.length === 0) {
    return queryParams;
  }
  const keyValuePairs = queryString.split("&");

  for (const pair of keyValuePairs) {
    if (!pair) {
      continue;
    } else if (pair.includes("=")) {
      let i = pair.indexOf("=");
      let key = decodeURIComponent(pair.slice(0, i).replace(/\+/g, " ").trim());
      let value = decodeURIComponent(
        pair
          .slice(i + 1)
          .replace(/\+/g, " ")
          .trim()
      );
      queryParams[key] = value;
    } else {
      queryParams[pair.trim()] = "";
    }
  }

  return queryParams;
}
const result = parseQueryString("more=1=1+0&equation = x = y + 1&goga");
console.log(result);

module.exports = parseQueryString;
