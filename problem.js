/*
  Problem: Nested Elements
  Find the average (mean) of all the numbers in an array, no matter how deeply nested.

  eg.
       average([1, [2], [[3, [4]]]])
       // expected output: 2.5

  You may assume that all elements are either arrays or numbers,
  and that arrays are nested no more than 1000 layers deep.
*/

// function average2(a) {
//   if (typeof a !== 'object') return a;
//   return a.reduce(({ sum, divisor }, element) => {
//     const recAvg = average2(element);
//     return { sum: sum + (recAvg.sum ?? recAvg), divisor: divisor + (recAvg.divisor ?? 1) };
//   }, { sum: 0, divisor: 0 });
// }

// function average(a) {
//   const { sum, divisor } = average2(a)
//   if (divisor == 0) return 0;
//   return sum / divisor;
// }


// array.flat
// 999 vs 1000 for limit
// b.flat(999)

// 31

// const m = (a) => typeof a != 'object' ? a : a.reduce(({ s, d }, e) => {
//     const r = m(e)
//     return { s: s + (r.s ?? r), d: d + (r.d ?? 1) }
//   }, { s: 0, d: 0 })

// const m = (a) => typeof a !== 'object' ? a : a.reduce(({ s, d }, e) => 
//   ({ s: s + (m(e).s ?? m(e)), d: d + (m(e).d ?? 1) }), { s: 0, d: 0 })


// return d and s / d

// 130
const average = (a) => {
  m = (a) => typeof a != 'object' ? a : a.reduce(({ s, d }, e) => {
    r = m(e)
    return { s: s + (r.s ?? r), d: d + (r.d ?? 1) }
  }, { s: 0, d: 0 })
  return m(a).d == 0 ? 0 : m(a).s / m(a).d
}

// export questions for use in `test.js`
module.exports = { average: average };
