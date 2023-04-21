"use strict";

//alert('Ramazan');

//const result = confirm('Заболели ещё весной?');

/* const answer = prompt("Что произошло в 2005-том году?", "");
console.log(answer);
console.log(typeof(answer)); */

const kaskad = [];
kaskad[0] = prompt("В детстве ты играл в футбол?", "");
kaskad[1] = prompt("А когда подрос стал играть рок-энд-ролл?", "");
kaskad[2] = prompt("И вдруг ты понял что всё это было напрасно?", "");
document.write(kaskad);

console.log(typeof(null));

//Интерполяция

const category = "toys";
console.log(`https://someurl.com/${category}/forAUE/228`); //Интерполяция с бэктиками

const user = "Oleg";
alert(`Hello, ${user}`);

//Операторы

console.log("arr" + "ay");
console.log(4 + +"5");

let incr = 10,
    decr = 10;

/* incr++;
decr--; */
console.log(incr++);
console.log(decr--);  // оператор инкремента и декримента выполняются после вывода значения в консоль

console.log(10%3);

console.log(2 * 4 == 8);
console.log(2 * 4 == '8');
console.log(2 * 4 === '8');

const isChecked = true,
        isClose = true;

console.log(isChecked && isClose);
console.log(!isChecked && isClose);
console.log(!isChecked || isClose);
console.log(!isChecked || !isClose);
console.log(2 + 2 * 2 != 6);

