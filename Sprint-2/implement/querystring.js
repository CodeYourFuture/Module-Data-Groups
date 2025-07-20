function parseQueryString(queryString) {
  const result = {};
  if (queryString.trim().length === 0) {
    return result;
  }
  const pairs = queryString.split("&");

  for (const pair of pairs) {
    if (!pair.includes("=")) {
      result[decodeURIComponent(pair)] = "";
    } else {
      const firstEqualIndex = pair.indexOf("=");
      const key = decodeURIComponent(pair.slice(0, firstEqualIndex));
      let value = pair.slice(firstEqualIndex + 1);
      value = value === "" ? "" : decodeURIComponent(value);
      result[key] = value;
    }
  }

  return result;
}
console.log(parseQueryString("a%25b=c%26d"));
module.exports = parseQueryString;
