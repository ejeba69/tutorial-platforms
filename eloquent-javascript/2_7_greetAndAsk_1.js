//~ 9:58 fri apr29 wk17 2022
//~ Greet And Ask program

let num = Number(prompt("Hello Joshua! Please enter any number of your choice:"));

while (Number.isNaN(num)) {
	num = Number(prompt("Hey, a number is required:"));
}
if (!Number.isNaN(num)) {
	console.log(`The square of your number is: ${num**2}`);
	alert(`The square of your number is: ${num**2}`);
}
/* if (!Number.isNaN(num)) {
	console.log(alert(`The square of your number is: ${num**2}`));
}
*/
