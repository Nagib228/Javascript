"use strict";

const box = document.getElementById('box'),
      btns = document.getElementsByTagName('button'),
      circles = document.getElementsByClassName('circle'),
      hearts = document.querySelectorAll('.heart'),
      oneHeart = document.querySelector('.heart');

console.dir(box);

/* box.style.backgroundColor = 'blue';
box.style.width = '500px'; */

btns[1].style.borderRadius = '100%'; //Сделать овал
circles[0].style.backgroundColor = 'red';

// box.style.cssText = 'background-color: blue; width: 500px';

const someColor = 'blue',
    num = '500px';
box.style.cssText = `background-color: ${someColor}; width: ${num}`;

/* for (let i = 0; i < hearts.length; i++) {
    hearts[i].style.backgroundColor = 'green';
}
 */
hearts.forEach((item, i) => {
    item.style.backgroundColor = 'green';
});

// Create elements

const div = document.createElement('div'),
      text = document.createTextNode('Яп яп'),
      wrapper = document.querySelector('.wrapper');

div.classList.add('black');

// document.body.append(div);
wrapper.append(div);
//wrapper.prepend(div);

//hearts[0].before(div);  
//hearts[0].after(div);

//circles[0].remove();

//hearts[0].replaceWith(circles[0]);

// Old constructions
/* 
wrapper.appendChild(div);
wrapper.insertBefore(div, hearts[0]);
wrapper.removeChild(hearts[1]);
wrapper.replaceChild(circles[0], hearts[0]); 
*/

// inneHTML
div.innerHTML = "<h1>Hello, my friend</h1>";

//TextContent
//div.textContent = "Hello";

div.insertAdjacentHTML("afterend", "<h2>Horse</h2>");

// The same
/* 
const wrapper = document.querySelector('.wrapper'),
      hearts = wrapper.querySelectorAll('.heart'),
      oneHeart = wrapper.querySelector('.heart');
 */