import inspect
import math
submissions = __import__('problem')

tests = [
    {
        'name': 'Nested Elements',
        'function': submissions.average,
        'tests': [
            { 'input': [1, 2, 3, 4, 5], 'output': 3 },
            { 'input': [[1], [[]], [3], 5, [[[7]], 9, [11]]], 'output': 6 },
            { 'input': [-2.25, [], [0], [4.5, [9.5], [[-10.25]]]], 'output': 0.3 },
            { 'input': [2.25, [], [0], [-4.5, [-9.5], [[10.25]]]], 'output': -0.3 },
            { 'input': [[],0,[[],[0,0,[],[[0],[]]],[]],[],0], 'output': 0 },
            { 'input': [], 'output': 0 },
            { 'input': [[[[[[[[[[[[[[[[[[[[[[[[]]]]]],[]]]]]],[]]]]],[]]]]]]]]]], 'output': 0 },
            { 'input': [[[[[[[9,[[[[[[[[[[[[[[[[]]]]]],[]]]]]],[]]]]],[]]]]]]]]], 'output': 9 },
        ]
    },
]

numErrors = 0
for suite in tests:
    for test in suite['tests']:
        output = suite['function'](test['input'])
        if output != test['output']:
            numErrors += 1
            suite['error'] = True
            print(suite['name'], 'failed with input', test['input'], '\n  Expected:', test['output'], 'received:', output, '\n')

def score(func):
    lines = inspect.getsource(func).split('\n')
    lines.pop(0) # remove the first line `function question(input):`
    chars = ''.join(''.join(lines).split());
    return len(chars);

if numErrors == 0:
    print('All tests passed!\n')

for suite in tests:
    print(suite['name'], 'number of characters used:', score(suite['function']))
