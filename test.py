import inspect
import json
import traceback

f = open('test.json')
tests = json.load(f)
f.close()

def score(func):
    lines = inspect.getsource(func).split('\n')
    lines.pop(0) # remove the first line `function question(input):`
    chars = ''.join(''.join(lines).split());
    return len(chars);

def test(func, **kwargs):
    suite = None
    if func.__name__ == 'average':
        suite = tests[0]

    if not suite:
        print('Test suite not found')
        print('Score:', score(func))
        return

    print(suite['name'])
    failed = False
    for test in suite['tests']:
        if (failed):
            continue

        input = test['input']
        inputDisplay = str(input)
        expected = test['output']
        output = None

        try:
            output = func(test['input'])
        except Exception as e:
            print('  Test failed with input', inputDisplay)
            print('    Received an error:\n')
            traceback.print_exc()
            failed = True
        else:
            if output != test['output']:
                print('  Test failed with input', inputDisplay)
                print('    Expected:', expected)
                print('    Received:', output)
                failed = True
    if not failed:
        print('  All tests passed!')
    print('\n  Score:', score(func))
