// JavaScript Document

const range = function(start, end, step=1) {
	let array = [];
	if (step > 0) {
		for (let i = start; i <= end; i+=step) {
			array.push(i);
		}
	} else if (step < 0) {
		for (let i = start; i >= end; i+=step) {
			array.push(i);
		}
	} else {
		return 'Can\'t count by zero.';
	}
	return array;
}

const sum = function(array) {
	let total = 0;
	for (let i = 0; i < array.length; i++) {
		total += array[i];
	}
	return total;
}

console.log(range(1, 10));
// → [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(range(5, 2, -1));
// → [5, 4, 3, 2]
console.log(sum(range(1, 10)));
// → 55