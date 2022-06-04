//~ 18:39 fri apr22 wk16 2022
//~ Greet and Ask program

/* let num = function (n) {
	Console.log("Hello Emmanuel! \nPlease, pick a number of your choice.");
	Number(n);
}
console.log(num);
*/

let num = Number(prompt("Hello Emmanuel! \nPlease, pick a number of your choice."));
console.log(num);
//~ console.log("The square of your number is " + num**2 + "!");
//~ console.log(8888);
//~ console.log("8888");
if (!Number.isNaN(num)) console.log("The square of your number is " + num**2 + "!");
else console.log("Hey, why didn't you give me a number?");
