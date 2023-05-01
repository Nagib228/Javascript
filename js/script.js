"use strict";

// DOM Navigation

//console.log(document.body);
//console.log(document.documentElement);  
//console.log(document.body.childNodes);

console.log(document.body.firstChild);  //перенос строки #text
console.log(document.body.lastChild);   //script

console.log(document.querySelector('#current').parentNode);             //first
console.log(document.querySelector('#current').parentNode.parentNode);  //wrapper

// Data attributes

//console.log(document.querySelector('[data-current="3"]'));  //по атрибуту <li data-current></li>
//console.log(document.querySelector('[data-current="3"]').nextSibling);   //следующая нода text
//console.log(document.querySelector('[data-current="3"]').previousSibling); //предыдущий #text

console.log(document.querySelector('[data-current="3"]').nextElementSibling);  //следующий элемент (не нода)
console.log(document.querySelector('[data-current="3"]').previousElementSibling); //предыдущий элемент

console.log(document.querySelector('#current').parentElement);  //получаем элемент родителя

console.log(document.body.firstElementChild);//первый эелмент ребёнок
console.log(document.body.lastElementChild); //последний элемент ребёнок (не ноды)

// Аналог childNodes (Псевдомассива)

for (let node of document.body.childNodes) {
    if (node.nodeName == '#text') {
        continue;
    }
    console.log(node);
}    // Вывод всех детей body без нодов (пропускаем в условии) 