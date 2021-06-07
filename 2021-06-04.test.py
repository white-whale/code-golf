import inspect
import math
submissions = __import__('2021-06-04')
numErrors = 0

tests = [
    {
        'name': 'Question 1',
        'function': submissions.question_1,
        'tests': [
            { 'input': [], 'output': 0 },
            { 'input': [{ 'price': 100, 'quantity': 2 }, { 'price': -10, 'quantity': 5 }], 'output': 150 },
            { 'input': [{ 'price': 0, 'quantity': 5 }, { 'price': 0.5, 'quantity': -2 }, { 'price': 0.25, 'quantity': 3 }], 'output': -0.25 },
            { 'input': [{ 'price': x, 'quantity': -1 if x % 3 == 0 else 1 } for x in range(1, 101)], 'output': 1684 },
        ]
    },
    {
        'name': 'Question 2',
        'function': submissions.question_2,
        'tests': [
            { 'input': '', 'output': '' },
            { 'input': 'clclclclclclclclclclclclclc', 'output': 'ClClClClClClClClClClClClClC' },
            { 'input': ' test input #three.', 'output': ' tEsT InPuT #tHrEe.' },
            { 'input': 'test input %%%%%%%four.', 'output': 'TeSt iNpUt %%%%%%%FoUr.' },
            { 'input': 'LOWERCASE', 'output': 'LoWeRcAsE' },
        ]
    },
    {
        'name': 'Question 3',
        'function': submissions.question_3,
        'tests': [
            { 'input': 0, 'output': '' },
            { 'input': 1, 'output': '1' },
            { 'input': 2, 'output': '1 1' },
            { 'input': 10, 'output': '1 1 2 3 5 8 13 21 34 55' },
            { 'input': 40, 'output': '1 1 2 3 5 8 13 21 34 55 89 144 233 377 610 987 1597 2584 4181 6765 10946 17711 28657 46368 75025 121393 196418 317811 514229 832040 1346269 2178309 3524578 5702887 9227465 14930352 24157817 39088169 63245986 102334155' },
        ]
    },
    {
        'name': 'Question 4',
        'function': submissions.question_4,
        'tests': [
            { 'input': [], 'output': [] },
            { 'input': ['North', 'East', 'South', 'West', 'East'], 'output': ['North', 'East', 'South'] },
            { 'input': ['North', 'South', 'South', 'East', 'West', 'North', 'West'], 'output': ['West'] },
            { 'input': ['North', 'North', 'East', 'South', 'West', 'South', 'North', 'East', 'East', 'West', 'North', 'West', 'East', 'West', 'South', 'West', 'North'], 'output': ['North', 'West', 'North'] },
            { 'input': ['North', 'West', 'North', 'West', 'North', 'East', 'North', 'East', 'South', 'East', 'South', 'East'], 'output': ['North', 'West', 'North', 'West', 'North', 'East', 'North', 'East', 'South', 'East', 'South', 'East'] },
            { 'input': ['North', 'West', 'North', 'West', 'North', 'East', 'North', 'East', 'South', 'North', 'East', 'South', 'East'], 'output': ['North', 'West', 'North', 'West', 'North', 'East', 'North', 'East', 'East', 'South', 'East'] },
            { 'input': ['North', 'West', 'East', 'East', 'East', 'West', 'North', 'South', 'West', 'West', 'East', 'East', 'West', 'South'], 'output': [] },
        ]
    },
    {
        'name': 'Question 5',
        'function': submissions.question_5,
        'tests': [
            { 'input': [2, 6, 8], 'output': '    #\n    #\n  # #\n  # #\n  # #\n  # #\n# # #\n# # #\n-----\n1 2 3\n' },
            { 'input': [8, 0, 0, 0, 5, 7, 1], 'output': '#\n#         #\n#         #\n#       # #\n#       # #\n#       # #\n#       # #\n#       # # #\n-------------\n1 2 3 4 5 6 7\n' },
            { 'input': [0, 5, 2, 2, 7], 'output': '        #\n        #\n  #     #\n  #     #\n  #     #\n  # # # #\n  # # # #\n---------\n1 2 3 4 5\n' },
            { 'input': [2, 1, 10, 1, 9, 9, 9, 0, 0], 'output': '    #\n    #   # # #\n    #   # # #\n    #   # # #\n    #   # # #\n    #   # # #\n    #   # # #\n    #   # # #\n#   #   # # #\n# # # # # # #\n-----------------\n1 2 3 4 5 6 7 8 9\n' },
        ]
    },
]

for suite in tests:
    for test in suite['tests']:
        output = suite['function'](test['input'])
        if output != test['output']:
            numErrors += 1
            suite['error'] = True
            print(suite['name'], 'failed with input', test['input'], '\n  Expected:', test['output'], 'received:', output)

def score(func):
    lines = inspect.getsource(func).split('\n')
    lines.pop(0) # remove the first line `function question(input):`
    return int(math.fsum([len(x.strip()) for x in lines]) - 7) # strip each line and subtract 7 (the number of characters in `return `)

if numErrors > 0:
    print('\nTest suite failed\n')
else:
    print('All tests passed!\n')

for suite in tests:
    print(suite['name'], 'score:', 'N/A' if 'error' in suite else score(suite['function']))
print('Total score:', int(math.fsum([0 if 'error' in suite else score(suite['function']) for suite in tests])))
