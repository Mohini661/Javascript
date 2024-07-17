//What will be the result for these expressions?
// 1. 5 > 4
// 2. "apple" > "pineapple"
// 3. "2" > "12"
// 4. undefined == null
// 5. undefined === null
// 6. null == "\n0\n"
// 7. 7. null === +"\n0\n"


console.log("🚀 ~ a:", 5 > 4); //true
console.log("🚀 ~ b:", "apple" > "pineapple"); //false
console.log("🚀 ~ c:", "2" > "12"); // true
console.log("🚀 ~ d:", undefined == null); // true
console.log("🚀 ~ e:", undefined === null); // false
console.log("🚀 ~ f:", null == "\n0\n"); // false
console.log("🚀 ~ g:",  null === +"\n0\n"); // false
console.log("🚀 ~ n0:","\n0\n") // String '0'
console.log("🚀 ~ +n0:", +"\n0\n")// number 0

