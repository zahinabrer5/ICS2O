let display = "";
let problem = "";
let ans;
let memory = "";
let curOper = "";
let logBase;
const screen = document.getElementById("screen");
const memDisp = document.getElementById("memDisp");
let angleUnit = "deg";
const angleUnitToggle = document.getElementById("angle-unit-toggle");

function addDigit(digit) {
    digit = String(digit);
    if ((problem == ans && digit != '-') || problem == '0') {
        problem = "";
        display = "";
    }
    if (digit == 0 && problem == '0')
        return;
    if (digit == '-' && curOper == '-')
        return;
    problem += digit;
    display += digit;
    updateScreen();
}

function addOper(oper) {
    if (problem == '' || isOper(problem.slice(-1)))
        return;
    if (oper == '.' && curOper == '.')
        return;
    if (problem == ans && oper == '.') {
        problem = "";
        display = "";
    }
    problem += oper;
    display += oper;
    display = display.replace('**', '^');
    curOper = oper;
    updateScreen();
}

function equals() {
    if (problem == '')
        return;
    if (isOper(problem.slice(-1)))
        problem = problem.slice(0, -1);
    ans = String(eval(problem));
    ans = String(+parseFloat(ans).toFixed(10));
    if (ans == 'Infinity' || ans == 'NaN' || ans == 'undefined') {
        ans = "";
        display = "MATH ERROR";
    } else display = ans;
    problem = ans;
    updateScreen();
}

function getAns() {
    clearProbDisp();
    problem += ans;
    display += "Ans";
    updateScreen();
}

function rand() {
    clearProbDisp();
    const random = Math.random();
    problem += random;
    display += random;
    updateScreen();
    randDisp.innerHTML = random;
}

function CE() {
    display = "";
    problem = "";
    curOper = "";
    updateScreen();
}

function DEL() {
    display = display.slice(0, -1);
    problem = problem.slice(0, -1);
    curOper = "";
    updateScreen();
}

function MS() {
    if (display == '' || isNaN(display))
        return;
    memory = Number(display);
    updateMemDisp();
}

function MC() {
    memory = "(empty)";
    updateMemDisp();
}

function MR() {
    problem += memory;
    display += memory;
    updateScreen();
}

function Madd() {
    if (display == '' || isNaN(display))
        return;
    memory += Number(display);
    updateMemDisp();
}

function Msub() {
    if (display == '' || isNaN(display))
        return;
    memory -= Number(display);
    updateMemDisp();
}

function updateMemDisp() {
    memDisp.innerHTML = memory;
}

function pi() {
    clearProbDisp();
    problem += Math.PI;
    display += 'π';
    updateScreen();
}

function e() {
    clearProbDisp();
    problem += Math.E;
    display += 'e';
    updateScreen();
}

function exp() {
    clearProbDisp();
    problem += "Math.exp(";
    display += "exp(";
    updateScreen();
}

function ln() {
    clearProbDisp();
    problem += "Math.log(";
    display += "ln(";
    updateScreen();
}

function log(b) {
    clearProbDisp();
    problem += `(1/Math.log(${b}))*Math.log(`;
    display += `log${b}(`;
    updateScreen();
}

function logx() {
    clearProbDisp();
    problem += `(1/Math.log(${logBase}))*Math.log(`;
    display += `log(`;
    updateScreen();
}

function updateLogBase(b) {
    logBase = b;
}

function tenToX() {
    clearProbDisp();
    problem += "10**";
    display += "10^";
    updateScreen();
}

function abs() {
    clearProbDisp();
    problem += "Math.abs(";
    display += "abs(";
    updateScreen();
}

function trig(trigFunc) {
    clearProbDisp();
    const inv = trigFunc.startsWith('a');
    if (angleUnit == 'deg') {
        if (inv)
            problem += `(180/Math.PI)*Math.${trigFunc}(`;
        else
            problem += `Math.${trigFunc}(Math.PI/180*`;
    } else
        problem += `Math.${trigFunc}(`;
    display += `${trigFunc}(`;
    updateScreen();
}

function updateAngleUnit() {
    angleUnit = angleUnitToggle.value;
    if (angleUnitToggle.innerHTML == "DEG") {
        angleUnitToggle.innerHTML = "RAD";
        angleUnitToggle.value = "deg";
    } else {
        angleUnitToggle.innerHTML = "DEG";
        angleUnitToggle.value = "rad";
    }
}

function getFactorial() {
    clearProbDisp();
    problem += "factorial(";
    display += "factorial(";
    updateScreen();
}

function factorial(n) {
    let res = n;
    for (let i = n-1; i > 1; i--)
        res *= i;
    return res;
}

function mod() {
    problem += '%';
    display += " mod ";
    updateScreen();
}

function updateScreen() {
    screen.value = display;
}

function clearProbDisp() {
    if (problem == ans) {
        problem = "";
        display = "";
    }
    updateScreen();
}

function keyboard(input) {
    display = input;
    input = input.replace('^', '**');
    problem = input;
    equals();
}

function isOper(char) {
    const opers = ['(', '+', '-', '*', '/', '.'];
    if (opers.includes(char)) return true;
}
