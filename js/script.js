"use strict";

// Функции

// Function Declaration

let num = 20;

function showFirstMessage() {
    console.log("Hello World!");
}

showFirstMessage();

function getSomeText(text) {
    console.log(text);
}
getSomeText("Hello!");

function addNum () {
    let num = 10;
    console.log(num);
}
console.log(num);
addNum();

function calc(a, b) {
    return(a + b);
}
console.log(calc(4, 3));

function ret() {
    let num = 50;
    return num;
}
const anotherNum = ret();
console.log(anotherNum);

// Function Expression

const logger = function () {
    console.log("World!");
};
logger();

// Стрелочная функция

const calc = (a, b) => {return a + b};
console.log(calc(3, 10));