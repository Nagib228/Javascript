"use strict";
/* 
if (4 == 9) {
    console.log("Еррор");
} else {
    console.log("Mistake");
}

const num = 50;

if (num < 49) {
    console .log("Error");
} else if (num > 100) {
    console.log("Erorr");
} else {
    console.log("OK!");
}

(num === 50) ? console.log("OK!") : console.log("ERORRO");

switch(num) {
    case 51:
        console.log("Error");
        break;
    case 100: 
        console.log("Error");
        break;
    case 50:
        console.log("В точку!");
        break;
    default:
        console.log("Yap yap");
        break;
} */


// Циклы

let num = 50;

/* while (num < 55) {
    console.log(num);
    num++;
}
 */

do {
    console.log(num);
    num++;
}
while (num < 55);

for (let i = 1; i < 10; i++) {
    if (i == 8) {
        //break;
        continue;
    }
    console.log(i);
}
