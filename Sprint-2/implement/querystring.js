function parseQueryString(queryString) {
  const result = {};
  if (queryString.length === "") {
    return result;
  }
  const pairs = queryString.split("&");

  for (let i = 0; i <pairs.length; i++) {
    const pair = pairs[i];
    const firstEqualSignIndex =pair.indexOf("=");
    let key = pair.slice(0,firstEqualSignIndex);
    let value = pair.slice(firstEqualSignIndex + 1);
    result[key] = value;


  }

  return result;
}
console.log(parseQueryString("equation = x = y + 1"));
module.exports = parseQueryString;
