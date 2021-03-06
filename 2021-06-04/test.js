const submissions = require('./problems');
let numErrors = 0;

const tests = [
    {
        name: 'Question 1',
        function: submissions.question1,
        tests: [
            { input: [], output: 0 },
            { input: [{ price: 100, quantity: 2 }, { price: -10, quantity: 5 }], output: 150 },
            { input: [{ price: 0, quantity: 5 }, { price: 0.5, quantity: -2 }, { price: 0.25, quantity: 3 }], output: -0.25 },
            { input: Array.from({ length: 100 }, (_, x) => ({ price: x + 1, quantity: (x + 1) % 3 === 0 ? -1 : 1 })), output: 1684 },
        ]
    },
    {
        name: 'Question 2',
        function: submissions.question2,
        tests: [
            { input: '', output: '' },
            { input: 'clclclclclclclclclclclclclc', output: 'ClClClClClClClClClClClClClC' },
            { input: ' test input #three.', output: ' tEsT InPuT #tHrEe.' },
            { input: 'test input %%%%%%%four.', output: 'TeSt iNpUt %%%%%%%FoUr.' },
            { input: 'LOWERCASE', output: 'LoWeRcAsE' },
        ]
    },
    {
        name: 'Question 3',
        function: submissions.question3,
        tests: [
            { input: 0, output: '' },
            { input: 1, output: '1' },
            { input: 2, output: '1 1' },
            { input: 10, output: '1 1 2 3 5 8 13 21 34 55' },
            { input: 40, output: '1 1 2 3 5 8 13 21 34 55 89 144 233 377 610 987 1597 2584 4181 6765 10946 17711 28657 46368 75025 121393 196418 317811 514229 832040 1346269 2178309 3524578 5702887 9227465 14930352 24157817 39088169 63245986 102334155' },
        ]
    },
    {
        name: 'Question 4',
        function: submissions.question4,
        comparison: (expected, received) => {
            if (received.length !== expected?.length) return false;
            return expected.every((val, i) => val === received[i]);
        },
        tests: [
            { input: [], output: [] },
            { input: ['North', 'East', 'South', 'West', 'East'], output: ['North', 'East', 'South'] },
            { input: ['North', 'South', 'South', 'East', 'West', 'North', 'West'], output: ['West'] },
            { input: ['North', 'North', 'East', 'South', 'West', 'South', 'North', 'East', 'East', 'West', 'North', 'West', 'East', 'West', 'South', 'West', 'North'], output: ['North', 'West', 'North'] },
            { input: ['North', 'West', 'North', 'West', 'North', 'East', 'North', 'East', 'South', 'East', 'South', 'East'], output: ['North', 'West', 'North', 'West', 'North', 'East', 'North', 'East', 'South', 'East', 'South', 'East'] },
            { input: ['North', 'West', 'North', 'West', 'North', 'East', 'North', 'East', 'South', 'North', 'East', 'South', 'East'], output: ['North', 'West', 'North', 'West', 'North', 'East', 'North', 'East', 'East', 'South', 'East'] },
            { input: ['North', 'West', 'East', 'East', 'East', 'West', 'North', 'South', 'West', 'West', 'East', 'East', 'West', 'South'], output: [] },
        ]
    },
    {
        name: 'Question 5',
        function: submissions.question5,
        tests: [
            { input: [2, 6, 8], output: '    #\n    #\n  # #\n  # #\n  # #\n  # #\n# # #\n# # #\n-----\n1 2 3\n' },
            { input: [8, 0, 0, 0, 5, 7, 1], output: '#\n#         #\n#         #\n#       # #\n#       # #\n#       # #\n#       # #\n#       # # #\n-------------\n1 2 3 4 5 6 7\n' },
            { input: [0, 5, 2, 2, 7], output: '        #\n        #\n  #     #\n  #     #\n  #     #\n  # # # #\n  # # # #\n---------\n1 2 3 4 5\n' },
            { input: [2, 1, 10, 1, 9, 9, 9, 0, 0], output: '    #\n    #   # # #\n    #   # # #\n    #   # # #\n    #   # # #\n    #   # # #\n    #   # # #\n    #   # # #\n#   #   # # #\n# # # # # # #\n-----------------\n1 2 3 4 5 6 7 8 9\n' },
        ]
    },
];

tests.forEach((suite) => suite.tests.forEach((test) => {
    const output = suite.function(test.input);
    const comparison = suite.comparison || ((a, b) => a === b);
    if (!comparison(output, test.output)) {
      suite.error = true;
      numErrors += 1;
      console.log(suite.name, 'failed with input', test.input, '\n  Expected:', test.output, 'received:', output);
    }
}));

function score(func) {
    const lines = func.toString().split('\n');
    lines.shift(); // remove the first line `function question(input) {`
    lines.pop(); // remove the last line `}`
    return lines
        .map((line) => line.trim().length) // get the number of characters in each line minus white space
        .reduce((a, b) => a + b) - 7; // add all the lines together, ignore the `return ` (7 characters)
}

if (numErrors > 0) {
    console.error('\nTest suite failed\n');
} else {
    console.log('All tests passed!\n')
}

tests.forEach((suite) => {
    console.log(suite.name, 'score:', suite.error ? 'N/A' : score(suite.function));
});
console.log('Total score:', tests.reduce((acc, suite) => acc + (suite.error ? 0 : score(suite.function)), 0))
