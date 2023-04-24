"use strict";

let a = 5,
    b = a;
b = b + 5;
console.log(a);
console.log(b);

/* 
const obj = {
    a: 5,
    b: 1
};
const copy = obj;
copy.a = 10;
console.log(copy);
console.log(obj);
 */

function copy(mainObj) {
    let objCopy = {};
    for (let key in mainObj) {
        objCopy[key] = mainObj[key];
    }
    return objCopy;
}

const numbers = {
    a: 2,
    b: 5,
    c: {
        x: 7,
        y: 4
    }
};

const newNumbers = copy(numbers);
newNumbers.a = 10;
/* console.log(newNumbers);
console.log(numbers);
 */
newNumbers.c.x = 10;
console.log(newNumbers);
console.log(numbers);


const add = {
    d: 17,
    e: 20
};
console.log(Object.assign(numbers, add));


const oldArray = ['a', 'b', 'c'];
const newArray = oldArray.slice();
newArray[1] = 'gfjlsgdfjg';
console.log(newArray);
console.log(oldArray);

//Spread оператор

const video = ['YouTube', 'Vimeo', 'RuTube'],
    blogs = ['WordPress', 'LiveJournal', 'Blogger'],
    internet = [...video, ...blogs, 'VK', 'FaceBook'];
console.log(internet);

function log(a, b, c) {
    console.log(a);
    console.log(b);
    console.log(c);
}
const num = [2, 5, 7];
log(...num);

const array = ["a", "b"];
const newAAray = [...array];
newAAray[0] = "ZHOPA";
console.log(array);
console.log(newAAray);

const AUE = {
    one: 1,
    two: 2
};
const newAUE = {...AUE};
newAUE.one = 228;
console.log(AUE);
console.log(newAUE);