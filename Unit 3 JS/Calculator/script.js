var num1 = 0;
var num2 = 0;
var signChoice = "";
var answer;
var showEq = " ";
var memory = 0;
const screen = document.getElementById("screen");
const memDisp = document.getElementById("memDisp");

function addNum(num) {
    screen.value += num;
}

function setSign(sign) {
    signChoice = sign;
    num1 = screen.value;
    screen.value = "";
}

function equalPressed() {
    num2 = screen.value;
    answer = eval(num1+signChoice+num2);
    screen.value = answer;
}

function CEBtn() {
    screen.value = "";
    num1 = 0;
    num2 = 0;
    signChoice = "";
    showEq = " ";
}

function memStore() {
    memory = Number(screen.value);
    updateMemDisp();
}

function memClear() {
    memory = "";
    updateMemDisp();
}

function memRecall() {
    screen.value = memory;
}

function memPlus() {
    memory += Number(screen.value);
    updateMemDisp();
}

function memMinus() {
    memory -= Number(screen.value);
    updateMemDisp();
}

function updateMemDisp() {
    memDisp.innerHTML = memory;
}
