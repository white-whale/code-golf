/*
  Q1.  This function will be called with an array of objects.
       Add up the numbers in the 'price' key multiplied by the 'quantity' key.
  eg.
       question1([{ price: 100, quantity: 2 }, { price: -10, quantity: 5 }])
       // expected output: 150
*/

function question1(array) {
    return
}


/*
  Q2.  Capitalize every other character of a string, starting with a capital letter.
  eg.
       question2('Their name is: Erin.')
       // expected output: 'ThEiR NaMe iS: eRiN.'
*/

function question2(string) {
    return
}


/*
  Q3.  Return the first n fibonacci numbers in a string separated by spaces.
  eg.
       question3(7)
       // expected output: '1 1 2 3 5 8 13'

*/

function question3(n) {
    return
}


/*
  Q4.  Simplify the directions.  Given an array of cardinal directions ('North', 'South', 'East', 'West'),
       your task is to recursively remove all instances where North and South or East and West appear side by side.
  eg.
       question4(['North', 'East', 'South', 'West', 'East'])
       // expected output: ['North', 'East', 'South']
       question4('North', 'South', 'South', 'East', 'West', 'North', 'West'])
       // expected output: ['West']

*/

function question4(directions) {
    return
}


/*
  Q5.  Make a histogram.  You will be given an array of values to make into a historgam as in the example below.
       There should be no trailing spaces at the end of a line, and each line including the last should end in a
       line break.
  eg.
       question5([7, 3, 10, 1, 0, 5])
       expected output:
    #
    #
    #
#   #
#   #
#   #     #
#   #     #
# # #     #
# # #     #
# # # #   #
-----------
1 2 3 4 5 6
*/

function question5(values) {
    return
}



// export questions for use in `test.js`
module.exports = {
    question1: question1,
    question2: question2,
    question3: question3,
    question4: question4,
    question5: question5
};
