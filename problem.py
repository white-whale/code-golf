import test

from functools import reduce

'''
  Problem: Nested Elements
  Find the average (mean) of all the numbers in a list, no matter how deeply nested.

  eg.
       average([1, [2, []], [[3, [4]]]])
       // expected output: 2.5

  You may assume that all elements are either lists or numbers,
  and that lists are nested no more than 1000 layers deep.
'''

# def avg3(nums, elem):
#   a, b = avg2(elem)
#   s, d = nums
#   return s + a, d + (b if b != None else 1)

# def avg2(a):
#   if type(a) != list:
#     return a, None
#   if a == []: return 0, 0
#   return reduce(avg3,  a, (0, 0))

# def average(a):
#   print('AVG', a)
#   s, d = avg2(a)
#   if d is 0:
#     return 0
#   return s / d

# 159
# def average(a):
#   def m(n, e):
#     a, b = o(e)
#     s, d = n
#     return s + a, d + (b if b != None else 1)
#   def o(a):
#     if type(a) != list:
#       return a, None
#     if a == []: return 0, 0
#     return reduce(m,  a, (0, 0))
#   s, d = o(a)
#   if d is 0:
#     return 0
#   return s / d

# pete's solution: create a flattened list using pop

# 149
def average(a):
  def m(n, e):
    a, b = o(e)
    s, d = n
    return s + a, d + (b if b != None else 1)
  def o(a):
    if type(a) != list:
      return a, None
    if a == []: return 0, 0
    return reduce(m,  a, (0, 0))
  s, d = o(a)
  return d and s / d




test.test(average)
