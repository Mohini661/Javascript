// According to the lodash documentation, _.compact creates an array with all falsey values removed. The values false, null, 0, "", undefined, and NaN are falsey.

// Your task is to build this helper function without using lodash. 
// You will write a function that receives an array and removes all falsey values.

// Examples
// compact([0, 1, false, 2, "", 3]);   // => [1, 2, 3]

function compact(arr) {
  let filtered = arr.filter(Boolean)
  return filtered
}
console.log(compact([0, 1, false, 2, "", 3]));




