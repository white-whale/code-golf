import inspect
import math
submissions = __import__('problems')

tests = [
    {
        'name': 'Nested Elements',
        'function': submissions.average,
        'tests': [
            { 'input': [], 'output': 0 },
            { 'input': [{ 'price': 100, 'quantity': 2 }, { 'price': -10, 'quantity': 5 }], 'output': 150 },
            { 'input': [{ 'price': 0, 'quantity': 5 }, { 'price': 0.5, 'quantity': -2 }, { 'price': 0.25, 'quantity': 3 }], 'output': -0.25 },
            { 'input': [{ 'price': x, 'quantity': -1 if x % 3 == 0 else 1 } for x in range(1, 101)], 'output': 1684 },
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
            print(suite['name'], 'failed with input', test['input'], '\n  Expected:', test['output'], 'received:', output)

def score(func):
    lines = inspect.getsource(func).split('\n')
    lines.pop(0) # remove the first line `function question(input):`
    chars = ''.join(''.join(lines).split());
    return len(chars);

if numErrors == 0:
    print('All tests passed!\n')

for suite in tests:
    print(suite['name'], 'score:', score(suite['function']))
