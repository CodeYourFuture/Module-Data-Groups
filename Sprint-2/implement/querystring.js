function parseQueryString(queryString) {
  let queryParams = {};
  const specialChars = /[!@#$%^&*(),.?":{}|<>=]/;
  if (queryString.length === 0) {
    return queryParams;
  }
  if (specialChars.test(queryString)) {
    if (queryString.includes("&")) {
      const kvPairs = queryString.split("&");
      for (let ele of kvPairs) {
        const [key, ...valueParts] = ele.split("=");
        queryParams[key] = valueParts.join("=");
      }
    } else {
      const [key, ...valueParts] = queryString.split("=");
      queryParams[key] = valueParts.join("=");
    }
  }
  return queryParams;
}
console.log(parseQueryString("equation=x=y+1"));
console.log(parseQueryString("colour=blue&sort=newest"));

module.exports = parseQueryString;

/*
RAWcode:not modified
function parseQueryString(queryString) {
  const queryParams = {};
  if (queryString.length === 0) {
    return queryParams;
  }
  const queryPart = queryString.split("?");
  const keyValuePairs = queryPart[1].split("&");
  for (const pair of keyValuePairs) {
    const [key, value] = pair.split("=");
    queryParams[key] = value;
    }

  return queryParams;
}

module.exports = parseQueryString;
*/
//MDN: note for my self alternate method inside the for loop
//const [key, ...valueParts] = pair.split("=");
// // const value = valueParts.join("="); // Join the remaining parts back together in case there are additional equals signs
