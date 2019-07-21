let row = function(size) {
	let repeat = '';
	for (let j = 0; j < size; j++) {
		for (let i = 0; i < size/2; i++) {
			repeat += '# ';
		}
		repeat += '\n';
	}
	
	console.log(repeat);
}
 row(16);


/*
Author's solution:
let size = 8;

let board = "";

for (let y = 0; y < size; y++) {
  for (let x = 0; x < size; x++) {
    if ((x + y) % 2 == 0) {
      board += " ";
    } else {
      board += "#";
    }
  }
  board += "\n";
}

console.log(board);
*/