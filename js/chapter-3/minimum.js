/// JavaScript Document

let min = function(a, b) {
	if (a <= b) {
		return a;
	} else  {
		return b;
	}
}

console.log(min(2, 5));

/*
Author's solution:
function min(a, b) {
  if (a < b) return a;
  else return b;
}

console.log(min(0, 10));
// → 0
console.log(min(0, -10));
// → -10

*/