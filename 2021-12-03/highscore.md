__High Scores__

|            | Javascript |   Python   |
| ---------- | ---------- | ---------- |
| Question 1 |     44     |     62     |


__Javascript__

```
function average(a) {
    s = n = 0
    for (x of a.flat(999))
        n++, s+=x
    return s / n || 0
} // 44
```

Notes:
  - Array.flat prevents the need for a recursive solution
  - For-of loop to compute the sum (s) and number (n) of elements was the shortest
    Alternatives include `a.reduce((b,c) => b + c) / a.length` we much longer
  - you can declare variables without let, const or var!
    Also, you can initialize multiple variables on the same line
  - division by 0 was avoided by `s / n || 0`.  This works because when there are no
    elements, s and n are 0, so s/n is NaN, which is falsey
  - comma operator is used to evaluate two expressions (shorter than {})


__Python__

```
def average(a):
    s = n = 0
    while a:
        x = a.pop()
        try:
            a = [*a, *x]
        except:
            s += x
            n += 1
    return n and s / n
# 62
```

Notes:
  - Recursive solutions are possible, but the shortest solution (Pete) found extended
    the given array by any sub-arrays found while looping through the array
  - Recording the sum (s) and number (n) or elements was shorter than trying to create
    a flattened array and use `sum(a) / len(a)`
  - You can check that a variable is an array with `if type(x) is list:`
    it was shorter to use a try/except instead of explicit type checking
  - division by 0 can be avoided by `n and s / n`
  - `a = a[*a, *x]` was shorter than `a.extend(x)`
