const fs = require('fs');
const { average } = require('./problem.js');

const submissions = [average];
const tests = JSON.parse(fs.readFileSync('./test.json'));


// Run the tests and output to the console
tests.forEach((suite, i) => {
    if (i > 0) console.log('\n');
    console.log(suite.name);

    let failed = false;
    suite.tests.forEach((test) => {
        if (failed) return;

        const input = test.input;
        const expected = test.output;
        console.log({...test})
        const inputDisplay = JSON.stringify(test.input);
        let output;
        try {
            output = submissions[i](input);
            console.log('my output:', output)
        } catch (err) {
            failed = true;
            console.log('  Test failed with input', inputDisplay);
            console.log('    Received an error:\n');
            console.error(err);
            return;
        }

        if (output !== expected) {
            failed = true;
            console.log('  Test failed with input', inputDisplay);
            console.log('    Expected:', expected);
            console.log('    Received:', output);
        }
    })
    if (!failed) {
        console.log('  All tests passed!');
    }
    console.log('\n  Score:', score(submissions[i]), '');
});


/*---- Helper functions ----*/

function score(func) {
    // "score" a function: the number of non-whitespace characters, excluding boilerplate
    const lines = func.toString().split('\n');
    lines.shift(); // remove the first line `function question(input) {`
    lines.pop(); // remove the last line `}`
    return lines.join('').replace(/\s/g,'').length
}
