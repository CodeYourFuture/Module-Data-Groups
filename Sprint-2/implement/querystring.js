function parseQueryString(queryString) {
  if (!queryString) return {};

  return Object.fromEntries(
    new URLSearchParams(queryString).entries()
  );
}
const queryString = "equation=x=y+1";
console.log(parseQueryString(queryString));

module.exports = parseQueryString;
