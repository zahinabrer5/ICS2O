// 1

// a
const word = prompt('Enter a word');
alert(word.charAt(1));

// b
alert(word.includes('M') ? 'The word has an M' : 'The word doesn\'t have an M');

// c
const sentence = prompt('Enter a sentence');
alert(sentence.length);

// d
alert(sentence.toLowerCase().split('m').length-1);

// e
const mid = word.substring(1,word.length-1);
alert(mid);

// f
alert('#'+mid+'#');

// 2

// a
let out = [];
for (let i = 5; i <= 15; i += 2)
    out.push(i);
alert(out.join(', '));

// b
out = [];
for (let i = 100; i >= 0; i -= 5)
    out.push(i);
alert(out.join(', '));

// c
out = [];
for (let i = 3; i <= 729; i *= 3)
    out.push(i);
alert(out.join(', '));

// 3
let input;
do {
    input = prompt('Enter something (enter \'0\' to stop the loop)');
} while (input !== '0');

// 4
function generateLetter() {
    return String.fromCharCode(65+Math.floor(26*Math.random()));
}

// 5
function generatePassword(len) {
    let password = '';
    for (let i = 0; i < len; i++)
        password += generateLetter();
    return password;
}

// 6
function checkPassword(given, actual) {
    return given === actual ? 'Correct password!' : 'Incorrect password!';
}

console.log(checkPassword(prompt('Enter password'), generatePassword(5)));

// 7
/*
Parameters are the variable that gets passed into a function.
The arguments are the stuff passed into the function call whereas
parameters are the variables representing the arguments in the
function body.
Example:
*/
function aPlusB(a, b) { // a and b are parameters
    return a + b;
}

console.log(aPlusB(5, 7)); // 5 and 7 are arguments

// 8
/*
A return statement gives whatever comes after it as the output of the
function. It terminates a function call. There could be more than 1
return statement in a function, but only 1 gets executed.
*/

// 9
function createWord(word, char) {
    let newWord = '';
    for (let i = 0; i < word.length; i++)
        newWord += char;
    return newWord;
}

alert(createWord('hello', '&'));
alert(createWord('cat', '-'));

const userWord = prompt('Enter a word');
const userChar = prompt('Enter a character');
alert(createWord(userWord, userChar));

// 10
/*
Code to trace:

var num1, num2, answer;
num1 = 10;
num2 = -10;
while (num1 < num2)
{
    answer = num2 - num1;
    alert(answer);
    num1 = num1 + num1;
}

num1 is initialized to 10
num2 is initialized to -10
Loop doesn't start because 10 > -10
*/
