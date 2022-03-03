# Dictionary

with open('dictionary.txt') as f:
    dictionary = [line.strip() for line in f.readlines()]
# dictionary is an array of 10638 valid 5 letter words
# these are the words that wordle accepts as guesses

# Helper functions
from helpers import compare, gradeWordleAlgorithm
# compare(target, guess) will colour a wordle guess
#     eg. compare('WHITE', 'WHALE') returns '22002'
#     eg. compare('LILAC', 'LLAMA') returns '21100'



''' 
Your task: Write a function that chooses the best wordle word!
 
This function will be passed an array of target words
This function must return a 5 letter word
Use any resources available to you!
''' 
 
def wordle(targets):
    targets.sort()
    return targets[0]



grade = gradeWordleAlgorithm(wordle);
print(grade["text"])



