// Dictionary
const { readFileSync } = require('fs');
const dictionary = readFileSync('./dictionary.txt').toString().trim().split('\n');
// dictionary is an array of 10638 valid 5 letter words
// these are the words that wordle accepts as guesses

// Helper functions
const { compare, gradeWordleAlgorithm } = require('./helpers');
// compare(target, guess) will colour a wordle guess
//     eg. compare('WHITE', 'WHALE') returns '22002'
//     eg. compare('LILAC', 'LLAMA') returns '21100'
//
// gradeWodleAlgorithm(algo) evaluates how well your function performs on 2309 different targets


/* Your task:
 *   Write a function that chooses the best wordle word!
 *
 *   This function will be passed an array of target words
 *   This function must return a 5 letter word
 *   Use any resources available to you!
 */ 
 
function wordle(targets) {
    return targets[0];
}


process.stdout.write('Scoring...');
const grade = gradeWordleAlgorithm(wordle);
process.stdout.write('\r');

console.log(grade.text)


