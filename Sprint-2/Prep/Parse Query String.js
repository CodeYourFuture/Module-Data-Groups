// https://example.com/widgets?colour=blue&sort=newest


function parseQueryString(queryString) {
    if (queryString === "") {
        return {};
    }
    else if(queryString.includes("?")){
        const parsedObject={};
        const queryStringArray = queryString.split("?")[1].split("&");
        queryStringArray.forEach((query)=> {
            const [key, value] = query.split("=");
            //The line above is called array destructuring. it is like storing the first and second elements of the array in the variables key and value respectively.
            parsedObject[key] = value;
        });
        return parsedObject;
    }
    else if(!queryString.includes("?")){
        const parsedObject={};

        const queryStringArray = queryString.split("&");

        queryStringArray.forEach((query)=> {
        const [key, value] = query.split("=");
        parsedObject[key] = value;
        });
        return parsedObject;
    }

};

console.log(parseQueryString("colour=blue&sort=newest"));
module.exports = parseQueryString;