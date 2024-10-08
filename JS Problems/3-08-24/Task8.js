// formula  Tn = (n * (n + 1) * (n + 2)) / 6
// Create a function that takes an integer n and returns the nth tetrahedral number.

// Examples
// tetra(2) ➞ 4
// tetra(5) ➞ 35
// tetra(6) ➞ 56

// Notes
// There is a formula for the nth tetrahedral number.

function tetra(n) {
	return (n*(n+1)*(n+2))/6
}
console.log(tetra(2));
console.log(tetra(5));
console.log(tetra(6));
