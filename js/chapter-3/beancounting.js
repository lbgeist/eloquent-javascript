// JavaScript Document

function countBs(string) {
	let counter = 0;
	for (let i = 0; i < string.length; i++) {
		if (string[i] === "B") {
			counter++;
		}
	}
	return counter;
}

function countChar(string, char) {
	let counter = 0;
	for (let i = 0; i < string.length; i++) {
		if (string[i] === char) {
			counter++;
		}
	}
	return counter;
}

console.log(countBs('Best BuddiesB'));
console.log(countChar('This is silly', 'l'));


/*
Author's solution:
function countChar(string, ch) {
  let counted = 0;
  for (let i = 0; i < string.length; i++) {
    if (string[i] == ch) {
      counted += 1;
    }
  }
  return counted;
}

function countBs(string) {
  return countChar(string, "B");
}

console.log(countBs("BBC"));
// → 2
console.log(countChar("kakkerlak", "k"));
// → 4
*/