function parseQueryString(query) {
  if (!query) return {};

  if (query.startsWith("?")) {
    query = query.slice(1);
  }

  return query.split("&").reduce((acc, pair) => {
    let [key, ...values] = pair.split("=");
    key = decodeURIComponent(key);
    let value = values.length > 0 ? values.join("=") : null;
  
    if (value === "") {
      value = null;
    } else if (value !== null) {
      value = decodeURIComponent(value);
    }

    if (acc[key] !== undefined) {
      acc[key] = [].concat(acc[key], value);
    } else {
      acc[key] = value;
    }

    return acc;
  }, {});
}

const queryString = "equation=x=y+1";
console.log(parseQueryString(queryString));


module.exports = parseQueryString;


