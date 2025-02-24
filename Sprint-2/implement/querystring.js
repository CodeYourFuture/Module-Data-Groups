const parseQueryString = (queryString) => {
  const queryParams = {};
  if (queryString.length === 0) {
    return queryParams;
  }
  const keyValuePairs = queryString.split("&");
  //console.log(keyValuePairs);

  for (const pair of keyValuePairs) {
    const [key, ...valueParts] = pair.split("=");
    //console.log([key, ...valueParts]);
    let value = valueParts.join("=");
    //console.log(...valueParts);
    //console.log(value);
    queryParams[decodeURIComponent(key)] = decodeURIComponent(value);
    //console.log(queryParams[key]);
  }

  return queryParams;
};
console.log(parseQueryString("equation=x=y+1"));
console.log(parseQueryString("name=Evelyn%20Mwanunura&age=34"));

module.exports = parseQueryString;
