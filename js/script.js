"use strict";

// Функции

// Function Declaration

/* let num = 20;

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
console.log(anotherNum); */

// Function Expression

/* const logger = function () {
    console.log("World!");
};
logger(); */

// Стрелочная функция

/* const calc = (a, b) => {return a + b};
console.log(calc(3, 10));

 */


// Методы и свойства
// Свойтство

const str = "Hello world";
console.log(str.length);

const array = [1, 2, 4, 5];
console.log(array.length);

//Методы

console.log(str.toLocaleUpperCase());
console.log(str.toLocaleLowerCase());

const fruit = "Some fruit";
console.log(fruit.indexOf("fruit"));
console.log(fruit.indexOf("z"));  //нет значения

const logg = "Hello world";
console.log(logg.slice(6, 11));  //запись "ДО" не включительна 
console.log(logg.slice(6));
console.log(logg.slice(-5, -1));

console.log(logg.substring(6, 11));

console.log(logg.substr(6, 5));


const num = 12.99;
console.log(Math.round(num));
console.log(Math.floor(num));

const test = "12.2px";
console.log(parseInt(test));
console.log(parseFloat(test));
