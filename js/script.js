"use strict";

let numberOfFilms;

function start() {
    numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?"," ");
    while (numberOfFilms == "" || numberOfFilms == null || isNaN(numberOfFilms)){
        numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?"," ");
    }
}
start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};


function rememberMyFilms() {
    for (let i = 0; i < 2; i++) {
        let a = prompt("Один из просмотренных фильмов?", "");
        while (a == "" || a == null || a.length > 50){
            a = prompt("Один из просмотренных фильмов?", "");
        }
        let b = prompt("На сколько оцените его?", "");
        while (b == "" || b == null || b.length > 50){
            b = prompt("На сколько оцените его?", "");
        }
        personalMovieDB.movies[a] = b;
    }
}
//rememberMyFilms();

function writeYourGenres (genre) {
    for (let i = 1; i <= 3; i++) {
        genre[i-1] = prompt(`Ваш любимый жанр под номером ${i}`);
    }
}
writeYourGenres(personalMovieDB.genres);


function detectPersonalLevel() {
    if (personalMovieDB.count < 10) {
        console.log("Просмотрено довольно мало фильмов");
    } else if (personalMovieDB.count < 30 && personalMovieDB.count >= 10) {
        console.log("Вы классический зритель");
    } else if (personalMovieDB.count >= 30) {
        console.log("Вы киноман");
    } else {
        console.log("Ошибка");
    }
}
detectPersonalLevel();

function showMyDB(hidden) {
    if (!hidden) {
        console.log(personalMovieDB);
    }
}
showMyDB(personalMovieDB.privat);