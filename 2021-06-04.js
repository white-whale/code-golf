/*
  Q1.  This function will be called with an array of objects.
       Add up the numbers in the 'price' key multiplied by the 'quantity' key.
  eg.
       question1([{ price: 100, quantity: 2 }, { price: -10, quantity: 5 }])
       // expected output: 150
*/

function question1(array) {
    return ;
}

/*
  Q2.  Capitalize every other character of a string, starting with a capital letter.
  eg.
       question2('Their name is: Erin.')
       // expected output: 'ThEiR NaMe iS: eRiN.'
*/

function question2(string) {
    return ;
}

/*
  Q3.  Return the value of the previous input to this function.
  eg.
       question3('one') // expected output: undefined
       question3(2) // expected output: 'one'
       question3() // expected output: 2
       question3({}) // expected output: undefined
*/

function question3(input) {
    return ;
}

/*
  Q4.  Return the first n fibonacci numbers in a string separated by spaces.
  eg.
       question4(10)
       // expected output: '1 1 2 3 5 8 13 21 34 55'

*/

function question4(n) {
    return ;
}

/*
  Q5.  Simplify the directions.  Given an array of cardinal directions ('North', 'South', 'East', 'West'),
       your task is to remove all instances where North and South or East and West appear immediately side by side.
  eg.
       question5(['North', 'East', 'South', 'West', 'East'])
       // expected output: ['North', 'East', 'South']
       question5('North', 'South', 'South', 'East', 'West', 'North', 'West'])
       // expected output: ['West']

*/

function question5(directions) {
    return ;
}

// export questions for use in `2021-06-04.test.js`
module.exports = {
    question1: question1,
    question2: question2,
    question3: question3,
    question4: question4,
    question5: question5
};
