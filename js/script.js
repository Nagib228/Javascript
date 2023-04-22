"use strict";

let numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?"," ");
while (numberOfFilms == "" || numberOfFilms == null || numberOfFilms.length > 50) {
    numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?"," ");
}

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};
/* for (let i = 0; i < 2; i++) {
    let a = prompt("Один из просмотренных фильмов?", "");
    while (a == "" || a == null || a.length > 50){
        a = prompt("Один из просмотренных фильмов?", "");
    }
    let b = prompt("На сколько оцените его?", "");
    while (b == "" || b == null || b.length > 50){
        b = prompt("На сколько оцените его?", "");
    }
    personalMovieDB.movies[a] = b;
} */

if (personalMovieDB.count < 10) {
    console.log("Просмотрено довольно мало фильмов");
} else if (personalMovieDB.count < 30 && personalMovieDB.count >= 10) {
    console.log("Вы классический зритель");
} else if (personalMovieDB.count >= 30) {
    console.log("Вы киноман");
} else {
    console.log("Ошибка");
}


/* let i = 0;
do {
    let a = prompt("Один из просмотренных фильмов?", "");
    let b = prompt("На сколько оцените его?", "");
    if (a == null || a == "" || a.length > 50 || b == null || b == "" || b.length > 50) {
        i--;
    } else{
        personalMovieDB.movies[a] = b;
    }
    i++;
}
while (i < 2); */

let i = 0;
while (i < 2) {
    let a = prompt("Один из просмотренных фильмов?", "");
    let b = prompt("На сколько оцените его?", "");
    if (a == null || a == "" || a.length > 50 || b == null || b == "" || b.length > 50) {
        i--;
    } else{
        personalMovieDB.movies[a] = b;
    }
    i++;
}


console.log(personalMovieDB);
