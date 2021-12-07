/*
  Problem: Nested Elements
  Find the average (mean) of all the numbers in an array, no matter how deeply nested.

  eg.
       average([1, [2, []], [[3, [4]]]])
       // expected output: 2.5

  You may assume that all elements are either arrays or numbers
  and that arrays are nested less than 1000 layers deep.
*/

function average(a) {
    s = c = 0;
    b = a.flat(999);
    for (i in b) {
        s += b[i];
        c++;
    }
    return s / c || 0;
}

// export questions for use in `test.js`
module.exports = { average: average };
