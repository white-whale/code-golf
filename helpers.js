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

// console.log(compare('LILAC', 'LLAMA'))
// console.log(compare('WHITE', 'WHALE'))


module.exports = {
    compare,
}
