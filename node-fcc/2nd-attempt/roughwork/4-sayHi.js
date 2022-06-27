// 9:40 sun jun26 wk25 2022
// This is me trying out modules
// 12:11 sun jun26 wk25 2022 --> Hurray! I made a small discovery with the export property and require function. If you are exporting a single function from its module, with no braces surrounding it ( e.g. module.exports = hi ); it would behave as a function in the module where it is required. In addition, if you adopt the destructuring method, you will not need to destructure the function in the module where it is required. But if you export a function with braces surrounding it, which obviously implies that you are exporting it as an object ( e.g. module.exports = {sayHi} ), it would behave as an object where it is required. Know this and know peace ;-)

// 1ST METHOD: DESTRUCTURING (My favourite method)
// OPTION 1: FUNCTION ALTERNATIVE
// const { ebote, onaiwu } = require("./5-names");
// const lgc = require('./6-logic');

// lgc("Alice");
// lgc(ebote);
// lgc(onaiwu);

// OPTION 2: OBJECT ALTERNATIVE
const { ebote, onaiwu } = require("./5-names");
const { sayHi } = require("./6-logic");

sayHi("Alice");
sayHi(ebote);
sayHi(onaiwu);

// 2ND METHOD
// OPTION 1: FUNCTION ALTERNATIVE
// const nm = require("./5-names");
// const lgc = require("./6-logic");

// lgc("Alice");
// lgc(nm.ebote);
// lgc(nm.onaiwu);

// OPTION 2: OBJECT ALTERNATIVE
// const nm = require("./5-names");
// const lg = require("./6-logic");

// lg.sayHi("Alice");
// lg.sayHi(nm.ebote);
// lg.sayHi(nm.onaiwu);
