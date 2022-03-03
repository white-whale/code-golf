const { compare } = require('./helpers.js');
const { wordle } = require('./wordle.js');

const { readFileSync } = require('fs');
const wordleTargets = readFileSync('./targets.txt').toString().trim().split('\n');
// wordleTargets is an array of 2309 words that are scheduled to be solutions to the official wordle game as of 2022-03-01

const MAX_ATTEMPTS = 10;
const CORRECT = compare('ABCDE', 'ABCDE');

// evaluate how good a particular wordle algorithm is
function gradeWordleAlgorithm(algo, targets = wordleTargets, depth = 1) {
    if (depth > MAX_ATTEMPTS) return { fail: targets, total: 0, count: 0, max: depth };

    const word = algo(targets);
    if (typeof word !== 'string' || word.length !== 5) {
        throw new Error('Unexpect output from `wordle` function - must return a 5 letter word');
    }
    
    const bins = makeBins(targets, word);
    const result = Object.keys(bins).reduce((acc, colour) => {
        if (colour == CORRECT) {
            acc.total += depth;
            acc.count += 1
        } else {
            const subresult = gradeWordleAlgorithm(algo, bins[colour], depth + 1);
            acc.total += subresult.total;
            acc.count += subresult.count;
            acc.fail = acc.fail.concat(subresult.fail);
            acc.max = Math.max(acc.max, subresult.max);
        }
        return acc;
    }, { fail: [], total: 0, count: 0, max: depth });

    return {
        fail: result.fail, // an array of words that we not found in 6 guesses
        total: result.total, // sum of depth before winning
        count: result.count, // count of all winning words
        average: result.total / result.count, // average depth before winning
        max: result.max, // maximum depth of a correct depth
    }
}

process.stdout.write('Scoring...');
const grade = gradeWordleAlgorithm(wordle);
process.stdout.write('\r');

if (grade.fail.length === wordleTargets.length) {
    console.log('Algorithm fails to guess any target words');
} else if (grade.fail.length > 25) {
    console.log(`Algorithm fails to guess the correct word over ${Math.floor(100 * grade.fail.length / wordleTargets.length)}% of the time within ${MAX_ATTEMPTS} attempts`);
    console.log('  failing words include', grade.fail.slice(10,15).toString());
} else if (grade.fail.length){
    console.log(`Algorithm fails to guess these words within ${MAX_ATTEMPTS} attempts:`)
    console.log('  ' + grade.fail.toString());
} else {
    console.log('Algorithm guesses all targets within', grade.max, 'attempts');
    console.log('The average number of attempts to guess the target is', grade.average);
}


// helper function
function makeBins(targets, play) {
    const bins = {};
    targets.forEach((word) => {
        const colour = compare(word, play);
        if (!bins[colour]) bins[colour] = [word];
        else bins[colour].push(word);
    });
    return bins;
}