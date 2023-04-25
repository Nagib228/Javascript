"use strict";
const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: function () {
        personalMovieDB.count = +prompt("Сколько фильмов Вы уже посмотрели?");
        while (personalMovieDB.count == "" ||personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = +prompt("Сколько фильмов Вы уже посмотрели?");
        }
    },
    rememberMyFilms: function () {
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
    },
    writeYourGenres: function(/* genre */) {
/*         for (let i = 1; i <= 3;i++) {
            genre[i-1] = prompt(`Ваш любимый жанр под номером ${i}`);
            while (genre[i-1] == "" || genre[i-1] == null) {
                genre[i-1] = prompt(`Ваш любимый жанр под номером ${i}`);
            }
        }
        personalMovieDB.genres.forEach((item, i) => {
            console.log(`Любимы жанр ${i+1} - это ${item}`);
        }); */
        for (let i = 1; i < 2; i++) {
        let genres = prompt(`Введите ваши любимые жанры через запятую`).toLocaleLowerCase();
        if (genres === '' || genres == null) {
            console.log(`Вы ввели некорректно`);
            i--;
        } else{
            personalMovieDB.genres = genres.split(', '); //из строки в массив
            personalMovieDB.genres.sort();
        }
        personalMovieDB.genres.forEach((item, i) => {
            console.log(`Любимы жанр ${i+1} - это ${item}`);
        }); 
    }
    },
    detectPersonalLevel() {
        if (personalMovieDB.count < 10) {
            console.log("Просмотрено довольно мало фильмов");
        } else if (personalMovieDB.count < 30 && personalMovieDB.count >= 10) {
            console.log("Вы классический зритель");
        } else if (personalMovieDB.count >= 30) {
            console.log("Вы киноман");
        } else {
            console.log("Ошибка");
        }
    },
    showMyDB: function (hidden) {
        if (!hidden) {
            console.log(personalMovieDB);
        }
    },
    toggleVisibleMyDB: function() {
        if (personalMovieDB.privat) {
            personalMovieDB.privat = false;
        } else {
            personalMovieDB.privat = true;
        }
    }
};

personalMovieDB.start();
//personalMovieDB.rememberMyFilms();
personalMovieDB.writeYourGenres();
personalMovieDB.detectPersonalLevel();
personalMovieDB.toggleVisibleMyDB();
personalMovieDB.showMyDB(personalMovieDB.privat);

