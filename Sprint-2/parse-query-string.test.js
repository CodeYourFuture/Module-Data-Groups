function parseQueryString(arg1){
    let stringToObject = {};
    if (arg1.length === 0 ){
        return stringToObject;
    }
    //else{  attention! : you do not need else here! if your condition is false, next codes will execute automatically!
    const [key, value] = arg1.split("=");
    stringToObject[key] = value;
    return stringToObject;
    //}
}

describe("parseQueryString()", ()=> {
    test("if string is empty, expected output is an empty object", ()=> {
        const inputValue = "";
        const currentOutput = parseQueryString(inputValue);
        const targetOutput = {};
        expect(currentOutput).toEqual(targetOutput);
    });
    test ("if string has a pair of 'query parameters', expected output is an object returning them as a property", ()=>{
        const inputValue = "sky=blue";
        const currentOutput = parseQueryString(inputValue);
        const targetOutput = {sky : "blue"};
        expect(currentOutput).toEqual(targetOutput);
    });
});

