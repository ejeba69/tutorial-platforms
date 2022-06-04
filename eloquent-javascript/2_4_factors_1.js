//~ 18:35 sat apr23 wk16 2022
//~ Factors program

let num = Number(prompt(`Hello Emmanuel! Please enter below, a number of your choice:`));
console.log(num);
//~ while (Number.isNaN(num) === true) {
while (Number.isNaN(num)) {
	num = Number(prompt(`Hey, why didn't you enter a number!? Please, enter a number:`));
	console.log(num);
}
if (num % 5 === 0) {
	console.log(`Your number is divisible by 5.`);
} else if (num % 5 !== 0) {
	console.log(`Your number is NOT divisible by 5.`);
}

//~ console.log(!Number.isNaN(num));
