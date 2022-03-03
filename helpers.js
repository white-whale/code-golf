const { readFileSync } = require('fs');
const wordleTargets = readFileSync('./targets.txt').toString().trim().split('\n');
// wordleTargets is an array of 2309 words that are scheduled to be solutions to the official wordle game as of 2022-03-01


function compare(target, guess) {
    // if the target word is 'PAUSE' and you guess 'RAZED' it will return '02010' (grey, green, grey, yellow, grey)
    // if the target word is 'BASIC' and you guess 'ABBEY' it will return '11000'
    // if the target word is 'HAPPY' and you guess 'APPLE' it will return '11200'

    let remainingLetters = target;
    const result = [0,0,0,0,0];
    // green pass
    [...guess].forEach((c, i) => {
        if (target[i] === c) {
            result[i] = 2;
            remainingLetters = remainingLetters.replace(c, '');
        }
    });
    // yellow pass
    [...guess].forEach((c, i) => {
        if (!result[i] && remainingLetters.includes(c)) {
            result[i] = 1;
            remainingLetters = remainingLetters.replace(c, '');
        }
    })
    return result.join('');
}

// Tests for the 'compare' function
// console.log(compare("WHITE", "WHALE") === "22002");
// console.log(compare("LILAC", "LLAMA") === "21100");
// console.log(compare("PAUSE", "RAZED") === "02010");
// console.log(compare("BASIC", "ABBEY") === "11000");
// console.log(compare("HAPPY", "APPLE") === "11200");
// console.log(compare("ABIDE", "SPEED") === "00101");
// console.log(compare("ERASE", "SPEED") === "10110");
// console.log(compare("STEAL", "SPEED") === "20200");
// console.log(compare("CREPE", "SPEED") === "01210");


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
        fail: result.fail, // an array of words that we not found in MAX_ATTEMPTS guesses
        total: result.total, // sum of depth before winning
        count: result.count, // count of all winning words
        average: result.total / result.count, // average depth before winning
        max: result.max, // maximum depth of a winning word
        text: result.fail.length 
            ? `Your algorithm did missed solving ${result.fail.length} words in ${MAX_ATTEMPTS} attempts.`
            : `Your algorithm solved all words in ${result.max} attempts\nThe average number of attemps is ${result.total / result.count}`
    }
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

function getTargets() {
    let targets = wordleTargets;
    for (let i = 0; i < arguments.length; i += 2) {
        const bins = makeBins(targets, arguments[i]);
        targets = bins[arguments[i + 1]];
    }
    return targets;
}

// console.log(getTargets('ROUND', '10000', 'TABLE', '01002'))

module.exports = {
    compare,
    gradeWordleAlgorithm,
    makeBins,
    getTargets,
}
