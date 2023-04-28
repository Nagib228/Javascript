"use strict";

const box = document.getElementById('box');
console.log(box);
/* 
const btns = document.getElementsByTagName('button');
console.log(btns);
 */
const btns  = document.getElementsByTagName('button')[0];
console.log(btns);   // console.log(btns[0]);

const circles = document.getElementsByClassName('circle');
console.log(circles);

// Новый стандарт

const hearts = document.querySelectorAll('.heart');         // Появлятеся метод forEach
hearts.forEach((item, i, hearts) => {
    console.log(item);
});

const oneHeart = document.querySelector('.heart');
console.log(oneHeart);

const selectDiv = document.querySelector('div');
console.log(selectDiv);