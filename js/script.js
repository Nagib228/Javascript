"use strict";

const btn = document.querySelector('button');
/* btn.addEventListener('click', () => {
    alert("Башкирия на связи");
});
 */
btn.addEventListener('mouseenter', (event) => {
    //console.log("Возьми мобилу, если она не в ....");
    //console.log(event);
    console.log(event.target);
    //event.target.remove();
});

const deleteElement = (e) => {
    e.target.remove();
};

btn.addEventListener('click', deleteElement, {once: true});
btn.removeEventListener('click', deleteElement);

const link = document.querySelector('a');
link.addEventListener('click', (e) => {
    e.preventDefault();
    console.log(e.target);
});