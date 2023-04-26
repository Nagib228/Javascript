"use strict";

//Tipization

// To String
console.log(typeof(String(null)));

console.log(typeof(5 + "")); //Канкатенация
//Example
const num = 5;
console.log("http://vk.com/catalog/" + num);
const fontSize = 26 + 'px';

//To Number
console.log(typeof(Number('5')));
console.log(typeof(+'5')); //Унарный плюс
console.log(typeof(parseInt("15px", 10)));

// To Boolean
let switcher = null;         //
switcher = '';              //
switcher = 0;               //
switcher = undefined;       //
switcher = NaN;             //FALSE
if (switcher) {
    console.log("Working ...");
}
switcher = 1;       //
switcher = [];      //
switcher = {};      //
switcher = 'Yap';  // TRUE
console.log(typeof(Boolean('4')));
console.log(typeof(!!"Oleg is here and he's the best student in the world"));   // !! - Перевод в Boolean

