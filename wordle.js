// Dictionary
const { readFileSync } = require('fs');
const dictionary = readFileSync('./dictionary.txt').toString().trim().split('\n');
// dictionary is an array of 10638 valid 5 letter words
// these are the words that wordle accepts as guesses

// Helper functions
const { compare } = require('./helpers');
// compare(target, guess) will colour a wordle guess
//     eg. colour('WHITE', 'WHALE') returns '22002'
//     eg. colour('LILAC', 'LLAMA') returns '21100'


/* Your task:
 *   Write a function that chooses the best wordle word!
 *
 *   This function will be passed an array of target words
 *   This function must return a 5 letter word
 */ 
function wordle(targets) {
    return targets[0];
}

module.exports = { wordle: wordle };

