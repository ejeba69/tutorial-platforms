/*
2022.3.19 sat wk11 17:44
*/

let journal = [];

function addEntry(events, squirrel) {
	journal.push({events, squirrel});
};

console.log(journal);

addEntry(["work", "touched tree", "pizza", "running", "television"], false);

console.log(journal);
