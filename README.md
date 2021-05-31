```
_________            .___         ________       .__   _____
\_   ___ \  ____   __| _/____    /  _____/  ____ |  |_/ ____\
/    \  \/ /  _ \ / __ |/ __ \  /   \  ___ /  _ \|  |\   __\
\     \___(  <_> ) /_/ \  ___/  \    \_\  (  <_> )  |_|  |
 \______  /\____/\____ |\___  >  \______  /\____/|____/__|
        \/            \/    \/          \/
```

__Goal__
Write functions that solve the given programming challenges in the fewest characters possible.

__Rules__
  - No changing function or input names
  - All code must be written inside the given function
  - No importing external libraries
  - White space at the beginning or end of a line doesn't count, nor does the final `return `

__Scoring__
The person who solves the most questions wins.  If two people have solved the same number of questions,
their total score is the sum of all the characters used in all 5 questions.  Lowest score wins.

__Testing__
Automatically check and score your answers using the following commands.
(You must have node/python installed on your computer to run these commands)
```
node 2021-06-04.test.js
python 2021-06-04.test.py
```



__Examples__

A "bad" solution for code golf.  Score is 66 characters:
```
// Question: add up all the numbers in an array.
function question(array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        sum = sum + array[i];
    }
    return sum;
}
```

A better solution for code golf: removing whitespace, semicolons and shorter variable declarations.  Score is 47 characters:
```
// Question: add up all the numbers in an array.
function question(array) {
    for(var s=0,i=0;i<array.length;i++)
        s+=array[i]
    return s
}
```

Different methods can give better results.  This scores 26 characters:
```
// Question: add up all the numbers in an array.
function question(array) {
    return array.reduce((a,b)=>a+b,0)
}
```
