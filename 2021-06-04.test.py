import inspect
import math
submissions = __import__('2021-06-04')
numErrors = 0

tests = [
    {
        'name': 'Question 1',
        'function': submissions.question1,
        'tests': [
            { 'input': [], 'output': 0 },
            { 'input': [{ 'price': 100, 'quantity': 2 }, { 'price': -10, 'quantity': 5 }], 'output': 150 },
            { 'input': [{ 'price': 0, 'quantity': 5 }, { 'price': 0.5, 'quantity': -2 }, { 'price': 0.25, 'quantity': 3 }], 'output': -0.25 },
            { 'input': [{ 'price': x, 'quantity': -1 if x % 3 == 0 else 1 } for x in range(1, 101)], 'output': 1684 },
        ]
    },
    {
        'name': 'Question 2',
        'function': submissions.question2,
        'tests': [
            { 'input': '', 'output': '' },
            { 'input': 'clclclclclclclclclclclclclc', 'output': 'ClClClClClClClClClClClClClC' },
            { 'input': ' test input #three.', 'output': ' tEsT InPuT #tHrEe.' },
            { 'input': 'test input %%%%%%%four.', 'output': 'TeSt iNpUt %%%%%%%FoUr.' },
        ]
    },
    {
        'name': 'Question 3',
        'function': submissions.question3,
        'tests': [
            { 'input': '', 'output': None },
            { 'input': 14, 'output': '' },
            { 'input': [1, 2, 3, 4], 'output': 14 },
            { 'input': None, 'output': [1, 2, 3, 4] },
            { 'input': 13, 'output': None },
            { 'input': True, 'output': 13 },
            { 'input': 'something', 'output': True },
            { 'input': 0, 'output': 'something' },
        ]
    },
    {
        'name': 'Question 4',
        'function': submissions.question4,
        'tests': [
            { 'input': 0, 'output': '' },
            { 'input': 10, 'output': '1 1 2 3 5 8 13 21 34 55' },
            { 'input': 40, 'output': '1 1 2 3 5 8 13 21 34 55 89 144 233 377 610 987 1597 2584 4181 6765 10946 17711 28657 46368 75025 121393 196418 317811 514229 832040 1346269 2178309 3524578 5702887 9227465 14930352 24157817 39088169 63245986 102334155' },
        ]
    },
    {
        'name': 'Question 5',
        'function': submissions.question5,
        'tests': [
            { 'input': [], 'output': [] },
            { 'input': ['North', 'East', 'South', 'West', 'East'], 'output': ['North', 'East', 'South'] },
            { 'input': ['North', 'South', 'South', 'East', 'West', 'North', 'West'], 'output': ['West'] },
            { 'input': ['North', 'North', 'East', 'South', 'West', 'South', 'North', 'East', 'East', 'West', 'North', 'West', 'East', 'West', 'South', 'West', 'North'], 'output': ['North', 'West', 'North'] },
            { 'input': ['North', 'West', 'North', 'West', 'North', 'East', 'North', 'East', 'South', 'East', 'South', 'East'], 'output': ['North', 'West', 'North', 'West', 'North', 'East', 'North', 'East', 'South', 'East', 'South', 'East'] },
            { 'input': ['North', 'West', 'North', 'West', 'North', 'East', 'North', 'East', 'South', 'North', 'East', 'South', 'East'], 'output': ['North', 'West', 'North', 'West', 'North', 'East', 'North', 'East', 'East', 'South', 'East'] },
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
    lines.pop() # remove the first line `function question(input):`
    return int(math.fsum([len(x.strip()) for x in lines]) - 7) # strip each line and subtract 7 (the number of characters in `return `)

if numErrors > 0:
    print('\nTest suite failed\n')
else:
    print('All tests passed!\n')

for suite in tests:
    print(suite['name'], 'score:', 'N/A' if 'error' in suite else score(suite['function']))
print('Total score:', int(math.fsum([0 if 'error' in suite else score(suite['function']) for suite in tests])))
