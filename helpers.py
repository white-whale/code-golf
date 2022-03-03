with open('targets.txt') as f:
    wordle_targets = [line.strip() for line in f.readlines()]

def compare(target, guess):
    # if the target word is 'PAUSE' and you guess 'RAZED' it will return '02010' (grey, green, grey, yellow, grey)
    # if the target word is 'BASIC' and you guess 'ABBEY' it will return '11000'
    # if the target word is 'HAPPY' and you guess 'APPLE' it will return '11200'

    remaining_letters = target
    result = ['0', '0', '0', '0', '0']
    # green pass
    for i, char in enumerate(guess): 
        if (target[i] == char):
            result[i] = '2'
            remaining_letters = remaining_letters.replace(char, '', 1)

    # yellow pass
    for i, char in enumerate(guess): 
        if result[i] == '0' and (char in remaining_letters):
            result[i] = '1'
            remaining_letters = remaining_letters.replace(char, '', 1)

    return ''.join(result)


# tests for the 'compare' function
# print(compare("WHITE", "WHALE") == "22002")
# print(compare("LILAC", "LLAMA") == "21100")
# print(compare("PAUSE", "RAZED") == "02010")
# print(compare("BASIC", "ABBEY") == "11000")
# print(compare("HAPPY", "APPLE") == "11200")
# print(compare("ABIDE", "SPEED") == "00101")
# print(compare("ERASE", "SPEED") == "10110")
# print(compare("STEAL", "SPEED") == "20200")
# print(compare("CREPE", "SPEED") == "01210")



CORRECT = compare('ABCDE', 'ABCDE')

# evaluate how good a particular wordle algorithm is
def gradeWordleAlgorithm(algo, targets = wordle_targets, depth = 1, max_attempts = 10):
    if depth > max_attempts:
        return { "fail": targets, "total": 0, "count": 0, "max": depth }

    word = algo(targets)
    if (not isinstance(word, str) or len(word) != 5):
        raise Exception('Unexpect output from `wordle` function - must return a 5 letter word')
    
    bins = makeBins(targets, word)
    result = { "fail": [], "total": 0, "count": 0, "max": depth }
    
    for colour in bins:
        if colour == CORRECT:
            result["total"] += depth
            result["count"] += 1
        else:
            subresult = gradeWordleAlgorithm(algo, bins[colour], depth + 1)
            result["total"] += subresult["total"]
            result["count"] += subresult["count"]
            result["fail"] = result["fail"] + subresult["fail"]
            result["max"] = max(result["max"], subresult["max"])

    return {
        "fail": result["fail"], # an array of words that we not found in max_attempts guesses
        "total": result["total"], # sum of depth before winning
        "count": result["count"], # count of all winning words
        "average": result["total"] / result["count"], # average depth before winning
        "max": result["max"], # maximum depth of a winning word
        "text": 
            'Your algorithm solved all words in ' + str(result["max"]) + 
            ' attempts\nThe average number of attemps is ' + str(result["total"] / result["count"]) if not len(result["fail"]) else 
            'Your algorithm did missed solving ' + str(len(result["fail"])) + ' words in ' + str(max_attempts) + ' attempts.'
    }



# helper function
def makeBins(targets, play):
    bins = {}
    for word in targets:
        colour = compare(word, play)
        if not colour in bins:
            bins[colour] = [word]
        else:
            bins[colour].append(word)
    return bins
