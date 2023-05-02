/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};

const adv = document.querySelectorAll('.promo__adv img'),
      poster = document.querySelector('.promo__bg'),
      genre = poster.querySelector('.promo__genre'),
      movieList = document.querySelector('.promo__interactive-list');
adv.forEach(item => {
    item.remove();
});

genre.textContent = 'драма';
poster.style.backgroundImage = 'url("img/bg.jpg")';

movieList.innerHTML = "";
movieDB.movies.sort();

movieDB.movies.forEach((film, i) => { 
    movieList.innerHTML +=   `  
        <li class="promo__interactive-item">${i+1}. ${film}
        <div class="delete"></div>
        </li>
    `;         
});

const a = document.querySelector('.promo__interactive-title');
const conf = document.querySelector('button');
const checkPoint = document.querySelector('.isChecked');
const remover = document.querySelectorAll('.delete');

a.addEventListener('mouseenter', () => {
   a.style.color = '#FFD500';
});
a.addEventListener("mouseout", () => {
    a.style.color = 'black';
});

conf.addEventListener('click' , (e) => {
    e.preventDefault();
    const input = document.querySelector('.adding__input');
    //console.log(input.value);
    if (input.value.length > 21) {
        input.value = input.value.slice(0, 21) + "...";
    }
    movieDB.movies.push(input.value);
    movieDB.movies.sort();
    movieList.innerHTML = "";
    movieDB.movies.forEach((film, i) => { 
        movieList.innerHTML +=   `  
            <li class="promo__interactive-item">${i+1}. ${film}
            <div class="delete"></div>
            </li>
        `;         
    });
    if (favoriteFilm) {
        console.log("Добавляем любимый фильм");
    }
});

let some = 0,
    favoriteFilm = false;
checkPoint.addEventListener('click', (e) => {
    some++;
    if (some%2 == 1) {
        favoriteFilm = true;
    } else {
        favoriteFilm = false;
    }
});

remover.forEach((item, i) => {
    item.addEventListener('click', (e) => {
        delete movieDB.movies[i];
        movieDB.movies.sort();
        movieList.innerHTML = "";
        movieDB.movies.forEach((film, i) => { 
        movieList.innerHTML +=   `  
            <li class="promo__interactive-item">${i+1}. ${film}
            <div class="delete"></div>
            </li>
        `;       
    });
        movieDB.movies.pop();
});
});
