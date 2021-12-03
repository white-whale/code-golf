const fs = require('fs');
const submissions = require('./problems.js');

const tests = [
    {
        name: 'Nested Elements',
        function: submissions.average,
        tests: [
            { input: [1, 2, 3, 4, 5], output: 3 },
            { input: [[1], [[]], [3], 5, [[[7]], 9, [11]]], output: 6 },
            { input: [-2.25, [], [0], [4.5, [9.5], [[-10.25]]]], output: 0.3 },
            { input: [2.25, [], [0], [-4.5, [-9.5], [[10.25]]]], output: -0.3 },
            { input: [[],0,[[],[0,0,[],[[0],[]]],[]],[],0], output: 0 },
            { input: [], output: 0 },
            { input: [[[[[[[[[[[[[[[[[[[[[[[[]]]]]],[]]]]]],[]]]]],[]]]]]]]]]], output: 0 },
            { input: [[[[[[[9,[[[[[[[[[[[[[[[[]]]]]],[]]]]]],[]]]]],[]]]]]]]]], output: 9 },
        ]
    },
];

let numErrors = 0;
tests.forEach((suite) => suite.tests.forEach((test) => {
    const output = suite.function(test.input);
    if (output !== test.output) {
      numErrors += 1;
      suite.error = true;
      console.log(suite.name, 'failed with input', test.input, '\n  Expected:', test.output, 'received:', output);
    }
}));

function score(func) {
    const lines = func.toString().split('\n');
    lines.shift(); // remove the first line `function question(input) {`
    lines.pop(); // remove the last line `}`
    return lines.join('').replace(/\s/g,'').length
}

if (numErrors === 0) {
    console.log('All tests passed!\n')
}

tests.forEach((suite) => {
    console.log(suite.name, 'score:', score(suite.function));
});
