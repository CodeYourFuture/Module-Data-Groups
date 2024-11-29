const invert = require("./invert.js");
test("expected output: {'sue':'name', 'student':'job'}",()=>{
    const x = {name:"sue", job: "student"};
    expect(invert(x)).toEqual({'sue':'name', 'student':'job'})
});