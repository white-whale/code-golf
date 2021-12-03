/*
  Problem: Nested Elements
  Find the average (mean) of all the numbers in an array, no matter how deeply nested.

  eg.
       average([1, [2], [[3, [4]]]])
       // expected output: 2.5

  You may assume that all elements are either arrays or numbers,
  and that arrays are nested no more than 1000 layers deep.
*/

function average(a) {
  
  b=a.flat(999)
  n=0 
  t=0

  for (i in b) {
    t += b[i]
    n ++
  }

  return t/n || 0
}




// export questions for use in `test.js`
module.exports = { average: average };

console.log(1+1);