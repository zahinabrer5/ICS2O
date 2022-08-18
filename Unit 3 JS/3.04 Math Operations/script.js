// Exercise 1:
// const cents = Number(prompt("Please enter an amount of money less than $1 (in cents):"));

// let pennies = cents;

// const quarters = Math.floor(pennies/25);
// pennies %= 25;

// const dimes = Math.floor(pennies/10);
// pennies %= 10;

// const nickels = Math.floor(pennies/5);
// pennies %= 5;

// document.write(cents + " cents is " + quarters + " quarters, " + dimes + " dimes, " + nickels + " nickels, " + pennies + " pennies");

// Exercise 2:
const n1 = Math.floor(30*Math.random()+1);
const n2 = Math.floor(70*Math.random()+20);
const n3 = Math.floor(5*Math.random()+1);
const q1 = (n1 + n2) * n3;
const q1Str = "("+n1+"+"+n2+")*"+n3;

const n4 = Math.floor(107*Math.random()+42);
const n5 = Math.floor(99*Math.random()-27);
const n6 = Math.floor(26*Math.random()+7);
const q2 = n4 * (n5 % n6);
const q2Str = n4+"*"+"("+n5+"%"+n6+")";

const n7 = Math.floor(420*Math.random()+69);
const n8 = Math.floor(666*Math.random()+21);
const n9 = Math.floor(10*Math.random()-9);
const q3 = n7*n8-n9;
const q3Str = n7+"*"+n8+"-"+n9;

const n10 = Math.floor(29*Math.random()+3);
const n11 = Math.floor(19*Math.random()+11);
const n12 = Math.floor(21*Math.random()+13);
const q4 = n10-n11%n12;
const q4Str = n10+"-"+n11+"%"+n12;

const n13 = Math.floor(34*Math.random()-67);
const n14 = Math.floor(44*Math.random()-7);
const n15 = Math.floor(9*Math.random()+1);
const q5 = (n13 - n14) % n15;
const q5Str = "("+n13+"-"+n14+")%"+n15;

const r1 = Number(prompt(q1Str + "=?"));
const r2 = Number(prompt(q2Str + "=?"));
const r3 = Number(prompt(q3Str + "=?"));
const r4 = Number(prompt(q4Str + "=?"));
const r5 = Number(prompt(q5Str + "=?"));

document.write("Question: " + q1Str + "<br>");
document.write("Your response: " + r1 + "<br>");
document.write("and the answer is ... " + q1 + "<br><br>");

document.write("Question: " + q2Str + "<br>");
document.write("Your response: " + r2 + "<br>");
document.write("and the answer is ... " + q2 + "<br><br>");

document.write("Question: " + q3Str + "<br>");
document.write("Your response: " + r3 + "<br>");
document.write("and the answer is ... " + q3 + "<br><br>");

document.write("Question: " + q4Str + "<br>");
document.write("Your response: " + r4 + "<br>");
document.write("and the answer is ... " + q4 + "<br><br>");

document.write("Question: " + q5Str + "<br>");
document.write("Your response: " + r5 + "<br>");
document.write("and the answer is ... " + q5 + "<br><br>");
