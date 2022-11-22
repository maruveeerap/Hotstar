
import navbar from './components/navbar.js';
console.log("navbar", navbar)

let nav_div = document.getElementById("navbar");
nav_div.innerHTML = navbar()


import appendMovies from  './scripts/append.js';

// let latest = document.getElementById("movie_grid");
// latest.innerHTML=appendMovies()





























let movies = [
    {
        Poster: "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/7117/517117-v",
        Title: "PREDATOR",
        Year: 2012,

    },
    {
        Poster: "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/1711/181711-v",
        Title: "RED SPARROW",
        Year: 2008,

    },
    {
        Poster: "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/5/1310005-v-85b8247fd1d5",
        Title: "LIGHTYEAR",
        Year: 2019,

    },
    {
        Poster: "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/2002/1272002-v-0b46ac28fdcd",
        Title: "FRESH",
        Year: 2021,

    },
    {
        Poster: "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/8721/1078721-v-868cbfb9539d",
        Title: "SHANG-CHI",
        Year: 2010,

    },
    {
        Poster: "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/7491/1067491-v-f0a658ea0b22",
        Title: "FREE GUY",
        Year: 2022,

    },
    {
        Poster: "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/1711/181711-v",
        Title: "RED SPARROW",
        Year: 2010,

    },
    {
        Poster: "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/2456/1282456-v-d59f2acafedc",
        Title: "2 AM",
        Year: 2000,

    },
];
let bollywood = [
    {
        img: "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/9233/1389233-v-9aaacc3bf07f",
        name: "TANAJI",
        rating: 9.6,

    },
    {
        img: "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/old_images/vertical/MOVIE/4189/1000074189/1000074189-v",
        name: "DRISHYAM",
        rating: 9.1,

    },
    {
        img: "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_1_5x/sources/r1/cms/prod/old_images/vertical/MOVIE/6088/1000216088/1000216088-v",
        name: "VIKRAM VEDHA",
        rating: 7.3,

    },
    {
        img: "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/3825/1163825-v-425dd8e7501a",
        name: "KAUN PRAVEEN TAMBE",
        rating: 8,

    },
    {
        img: "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/3166/1023166-v-dfa5af5252af",
        name: "GUMRAH",
        rating: 6,

    },
    {
        img: "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/8008/1098008-v-d910d3431853",
        name: "SIX",
        rating: 8,

    },
    {
        img: "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/9263/1089263-v-13f4d7e9411b",
        name: "ARYA",
        rating: 8.1,

    },
    {
        img: "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/2155/912155-v",
        name: "HOSTAGES",
        rating: 7.6,

    },

];
let sports = [
    {
        img: "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/9226/1389226-v-8f96db1fe315",
        name: "M S DHONI",
        rating: 8.6,

    },
    {
        img: "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/608/1160608-v-8680160dd6b2",
        name: "83",
        rating: 7.1,

    },
    {
        img: "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/old_images/vertical/MOVIE/1354/1000001354/1000001354-v",
        name: "BHAAG MILKHA",
        rating: 8.3,

    },
    {
        img: "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/3270/1173270-v-b2cc135901b1",
        name: "SHANE",
        rating: 7.2,

    },
    {
        img: "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/3825/1163825-v-425dd8e7501a",
        name: "KAUN PRAVEEN TAMBE",
        rating: 8,
    },
    {
        img: "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/9127/879127-v",
        name: "TIGER",
        rating: 8.9,

    },
    {
        img: "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/5511/855511-v",
        name: "SAFETY",
        rating: 7.3,

    },
    {
        img: "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/9343/419343-v",
        name: "HEART OF GOLD",
        rating: 8.7,

    },

];

let slidesimg = ["https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/9218/1389218-h-2a35a38e4b54", "https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/6155/1406155-h-d85d7a7aa0ad", "https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/9232/1389232-h-de11320b3e32", "https://shifu.hotstarext.com/SOURCE/VOD/cd-2022-10-19/JhanWCKY_Desk-e7890f60-a4c4-4077-8023-784fadf56d32.jpg", "https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/1778/1291778-h-ffae3d1299f3"]


let images = document.createElement("img")

images.src = slidesimg[0]

let slides = document.getElementById("slideshow").append(images)


let i = 1

setInterval(function () {

    if (i === slidesimg.length) {
        i = 0;
    }
    images.src = slidesimg[i]

    i++;



}, 3000);


// function latestMovies(data) {
//     let loader = document.getElementById("loader")
//     loader.style.display = "none"
//     document.getElementById("latest").innerHTML = "";
//     data.forEach(function (el) {
//         let box = document.createElement("div")

//         let image1 = document.createElement("img")
//         image1.src = el.img
//         let name1 = document.createElement('h4')
//         name1.innerText = el.name
//         let rating1 = document.createElement("p")
//         rating1.innerText = el.rating


//         box.append(image1, name1, rating1)
//         document.getElementById("latest").append(box)



//     });

// }
appendMovies(movies)

function latestBollywood(data1) {
    data1.forEach(function (el) {
        let box = document.createElement("div")

        let image1 = document.createElement("img")
        image1.src = el.img
        let name1 = document.createElement('h4')
        name1.innerText = el.name
        let rating1 = document.createElement("p")
        rating1.innerText = el.rating


        box.append(image1, name1, rating1)
        document.getElementById("bollywood").append(box)



    });

};
latestBollywood(bollywood)

function latestSports(data2) {
    data2.forEach(function (el) {
        let box = document.createElement("div")

        let image1 = document.createElement("img")
        image1.src = el.img
        let name1 = document.createElement('h4')
        name1.innerText = el.name
        let rating1 = document.createElement("p")
        rating1.innerText = el.rating


        box.append(image1, name1, rating1)
        document.getElementById("sports").append(box)



    });

};
latestSports(sports)


function sortLH() {

    movies.sort(function (a, b) {
        return a.rating - b.rating
    })
    latestMovies(movies)

};
function sortHL() {

    movies.sort(function (a, b) {
        return b.rating - a.rating
    })
    latestMovies(movies)

};


let getmeData = new Promise(function (resolve, reject) {

    setTimeout(function () {
        let data = movies
        if (data != null) {
            resolve(data)
        } else {
            reject("ERROR: ITS LOADING.....")
        }

    }, 3000);


});


getmeData.then(function (success) {
    latestMovies(success)

});
getmeData.catch(function (error) {

});







