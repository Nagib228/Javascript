"use strict";

function first() {
    setTimeout(function() {
        console.log(1);
    }, 500);
}

function second() {
    console.log(2);
}

first();
second();

function learnJS (lang, callback) {
    console.log(`Я учу: ${lang}`);
    callback();
}

learnJS(`Javascript`, function() {
    console.log(`Я прошёл этот урок!`);
});

function done () {
    console.log(`Я прошёл этот урок!`);
}

learnJS(`JavaScript`, done);  //done не вызываем,а обращаемся к имени

// Объекты, деструктуризация объектов

//const obj = new Object();
const options = {
    name: 'test',
    width: 1024,
    height: 1024,
    colors: {
        border: "black",
        bg: "red"
    }
};
console.log(options.name);

/* delete options.name;
console.log(options); */


for (let key in options) {
    if (typeof(options[key]) === 'object') {
        for (let i in options[key]) {
            console.log(`Свойство ${i} имеет значение ${options[key][i]}`);
        }
    } else {
        console.log(`Свойство ${key} имеет значение ${options[key]}`);
    }
}

console.log(options["colors"]["border"]);

let counter = 0;
for (let j in options) {
    counter++;
}
console.log(counter);

console.log(Object.keys(options));   //Создаём массив из ключей объекта
console.log(Object.keys(options).length); //количество ключей первой вложенности


const method = {
    makeTest: function () {
        console.log("Test");
    }
};
method.makeTest();

//Деструктуризация

const {border, bg} = options.colors;
console.log(border);