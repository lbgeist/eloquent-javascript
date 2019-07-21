// JavaScript Document
let triangle = function() {
	let row = '';
	while (row.length < 7) {
		row += '#';
		console.log(row);
	}
}

triangle();

/*
Author's solution:
for (let line = "#"; line.length < 8; line += "#")
  console.log(line);
*/