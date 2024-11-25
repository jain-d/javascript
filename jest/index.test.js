let index = require("./index.js");
let args = [45, 55]
test(`testing index.js for the values ${args}`, () => {
   expect(index(...args)).toBe(-10);
})
