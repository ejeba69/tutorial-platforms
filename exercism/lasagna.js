/* 2022.3.21 mon wk12 10:03
 * Lucian's Luscious Lasagna
 */

// Task 1
const EXPECTED_MINUTES_IN_OVEN = 40;
//export const EXPECTED_MINUTES_IN_OVEN = 40;
console.log(EXPECTED_MINUTES_IN_OVEN);

// Task 2
function remainingMinutesInOven(actualMinutesInOven) {
	return EXPECTED_MINUTES_IN_OVEN - actualMinutesInOven;
};
console.log(remainingMinutesInOven(31));

// Task 3
function preparationTimeInMinutes(numberOfLayers) {
	return numberOfLayers * 2;
};
console.log(preparationTimeInMinutes(7));

// Task 4
function totalTimeInMinutes(numberOfLayers, actualMinutesInOven) {
	return preparationTimeInMinutes(numberOfLayers) + actualMinutesInOven;
};
console.log(totalTimeInMinutes(3, 20));
