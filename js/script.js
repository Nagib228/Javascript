'use strict';

// Динамические скрипты, Async && Defer

const p = document.querySelectorAll('p');
console.log(p);

// Dynamic scripts

/* const script = document.createElement('script');
script.src = "js/test.js";
document.body.append(script); */

function loadScript(src) {
    const script = document.createElement("script");
    script.src = src;
    //script.async = false;
    document.body.append(script);
}

loadScript("js/test.js");