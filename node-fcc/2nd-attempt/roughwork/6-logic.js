// 9:53 sun jun26 wk25 2022
// This is me trying out my hands on modules

// PROGRAM LOGIC (Don't mind the name "program logic". It's just me trying to BOTH be more familiar with the term, "program logic" AND feel as if I'm working on an important project. Whereas, na just ordinary practice I dey do o ;-) )

const hi = name => console.log(`${name}, long time no see! \nHow your side na?\n`);
const sayHi = name => console.log(`${name}, how far na! \nWetin dey play?\n`);

// module.exports = hi; // (OPTION 1: FUNCTION ALTERNATIVE)
module.exports = { sayHi }; // (OPTION 2: OBJECT ALTERNATIVE)

// console.log(module);
// console.log(module.exports);