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

document.querySelectorAll('.promo__adv img').forEach((item,i) => {
    item.remove();
});

document.querySelector('.promo__genre').textContent = "Драма";

const back = document.querySelector('.promo__bg');
back.style.cssText = 'background: url(../img/bg.jpg);';

let newMovies = [];
for (let i in movieDB){
    for (let j in movieDB[i]){
        newMovies[j] = movieDB[i][j];
    }
    newMovies.sort();
}

const movies = document.querySelectorAll('.promo__interactive-item');
movies.forEach ((item, i) => {
    item.textContent = `${i+1}. ${newMovies[i]}`;
});