//~ 23:40 fri apr22 wk16 2022
//~ Greet and Ask program 3rd iteration

let num = Number(prompt("Hello Emmanuel! \nPlease, enter any number of your choice."));
/* console.log(num);

if (!Number.isNaN(num)) {console.log(`The square of your number, is ${num**2}!`)} 
else num = Number(prompt(`Hey, why didn't you enter a number? \nPlease enter a number this time around.`));
console.log(num);
console.log(`Finally, you've correctly entered a number! The square of your number is ${num**2}.`);
*/

if (!Number.isNaN(num)) {console.log(num); console.log(`The square of your number, is ${num**2}!`)} 
else while (Number.isNaN(num)) {
	num = Number(prompt(`Hey, why didn't you enter a number? \nPlease enter a number this time around.`));
};
console.log(num);
console.log(`Finally, you've correctly entered a number! The square of your number is ${num**2}.`);
