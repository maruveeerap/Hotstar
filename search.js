// import navbar from './components/navbar.js';

// let nav_div =document.getElementById("navbar");
// nav_div.innerHTML=navbar()






  let search = document.getElementById("search")
  search.addEventListener("input",function(){

      debounce(searchMovies,1000)
  })

import appendMovies from './scripts/append.js';









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


// searching at a time

// let search_loader = document.getElementById("search_loader");

// async function searchMovies() {

//     //     search_loader.style.display = "block";


//     let search_data = document.getElementById("movie_name").value;
//     console.log('search_data:', search_data);

//     //     //Api - key -503acd69
//     //     //url - `https://www.omdbapi.com/?apikey=150bff3b&s=${search_data}` (Used s = "search parameter")

//     try {
//         let response = await fetch(`http://www.omdbapi.com/?apikey=503acd69&s=${search_data}`);
//         //console.log('response:', response);


//         let data = await response.json(); //this "json" collects the data coming from api
//         console.log('data:', data);


//         let actual_data = data.Search;
//         // console.log("actual_data", actual_data);
//         appendMovies (actual_data);

//     }
//     catch (err) {
//         console.log('err:', err);
//     }

// }


// function appendMovies (data) {

//     search_loader.style.display = "none";

//     let movie_div = document.getElementById("movie_grid");
//     movie_div.innerHTML = null;

//     data.forEach(function (el) {

//         let div = document.createElement("div");

//         let poster = document.createElement("img");
//         poster.src = el.Poster;

//         let title = document.createElement("h3");
//         title.innerText = el.Title;

//         let year = document.createElement("p");
//         year.innerText = el.Year;

//         div.append(poster, title, year);
//         movie_div.append(div);

//     })
// }



// search with type

async function searchMovies() {

    let movie_name = document.getElementById("movie_name").value
    // console.log(movie_name)



    try {
        let response = await fetch(`http://www.omdbapi.com/?apikey=503acd69&s=${movie_name}`);
        //console.log('response:', response);


        let data = await response.json(); //this "json" collects the data coming from api
        // console.log('data:', data);


        let actual_data = data.Search;
        // console.log("actual_data", actual_data);
        appendMovies(actual_data);

    }
    catch (err) {
        console.log('err:', err);
    }

}


let id;

function debounce(func,delay){

    if(id){
        clearTimeout(id);
    }

    // func=searchMovies
    id=setTimeout(function(){
        func();

    },delay);

}
