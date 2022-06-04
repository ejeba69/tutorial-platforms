//~ 13:40 fri apr29 wk17 2022
//~ Greet and Ask program (one more attempt)

let n = prompt("Hello Emmanuel, please pick a number of your choice:");
let num = Number(n);

function squ() {
	console.log(`The square of your number is: ${num**2}`);
	alert(`The square of your number is: ${num**2}`);
}

if (!Number.isNaN(num)) {
	console.log(squ());
}

//~ while (Number.isNaN(num)) {
	//~ prompt(`Hey, \"` + n + `\" is not a number. A number is required:`);
//~ }

while (Number.isNaN(num)) {
	n = prompt(`Hey, \"` + n + `\" is not a number. A number is required:`);
}

//~ if (!Number.isNaN(num)) {
	//~ console.log(squ());
//~ }
