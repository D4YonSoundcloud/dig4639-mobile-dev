const Adder = require("./Adder.js");

let adder = new Adder({
    a: 5, b: undefined
});

console.log(adder.render());