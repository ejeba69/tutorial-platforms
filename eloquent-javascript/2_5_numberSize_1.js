//~ 20:11 sat apr23 wk16 2022
//~ Number size program

let num = Number(prompt(`Hello bros Emma! Please, enter a number of your choice:`));
console.log(num);
while (Number.isNaN(num)) num = Number(prompt(`Bros Emma, that's not a number. Please, enter a number.`));
if (num < 100) console.log(`Haba! Your number is a small number, na.`);
//~ else if (100 < num <= 1000) console.log(`your number is a medium-size number.`);
//~ else if (1000 < num < 1e6) console.log(`Hmm, your number is large.`);
//~ else if (num >= 1e6) console.log(`Omo! your number is BIG O!`);
else if (num < 1000) console.log(`your number is a medium-size number.`);
else if (num < 1e6) console.log(`Hmm, your number is large.`);
else if (num >= 1e6) console.log(`Omo! your number is BIG O!`);
