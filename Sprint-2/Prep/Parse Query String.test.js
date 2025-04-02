const parseQueryString = require("./Parse Query String.js");
const quesryString="https://example.com/widgets?colour=blue&sort=newest";

describe("parseQueryString", ()=>{
    test("it will return empty object when we call parseQueryString with empty string", ()=>{
        const input="";
        const currentOutPut= parseQueryString(input);
        const targetOutPut={};
        expect(currentOutPut).toEqual(targetOutPut);
    });

    test("it will return object with key value pairs when we call parseQueryString with string", ()=>{
        const input="https://example.com/widgets?colour=blue&sort=newest";
        const currentOutPut= parseQueryString(input);
        const targetOutPut={colour:"blue",sort:"newest"};
        expect(currentOutPut).toEqual(targetOutPut);
    });

    test("it will return object with key value pairs when we call parseQueryString with string", ()=>{
        const input="colour=blue&sort=newest";
        const currentOutPut= parseQueryString(input);
        const targetOutPut={colour:"blue",sort:"newest"};
        expect(currentOutPut).toEqual(targetOutPut);
    });
}
)
